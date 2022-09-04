<template>
<div class="status padding section">
<p class="boldText"><b>Activities</b></p>
<div id="statusComps" class="mt-4">
<span :class="`w-3 h-3 rounded-full inline-block mr-1 ${getDiscordStatus}`"></span>
<span class="normalText opacity-60">{{ getDiscordStatusDetails }}</span>
</div>
<div id="statusComps" class="mt-4">
<span class="normalText opacity-60">{{ getSpotifyStatusDetails }}</span>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      finished: false,
      lanyard: {},
      socket: null,
    }
  },
  computed: {
    /**
     * Returns status detail as string.
     * @returns {string}
     */
    getDiscordStatusDetails() {
      const lanyard = this.lanyard
      if (!lanyard) return {}
      switch (this.lanyard.discord_status) {
        case "online":
          return "Online in Discord"
        case "idle":
          return "Online in Discord"
        case "dnd":
          return "Online in Discord"
        case "offline":
          return "Offline in Discord"
        default:
          return "Loading"
      }
    },
    /**
     * Returns spotify status detail as string.
     * @returns {string}
     */
    getSpotifyStatusDetails() {
      const lanyard = this.lanyard
      if (!lanyard) return {}
      switch (this.lanyard.listening_to_spotify ) {
        case true:
          const spotifySong = this.lanyard.spotify.song.split("(")[0]
          const spotifyArtist = this.lanyard.spotify.artist.split("(")[0]
          const SpotifyTrackId = this.lanyard.spotify.track_id
          return "Listening to " + spotifySong + " by " + spotifyArtist
        case false:
          return "Not listening Spotify"
        default:
          return "Loading"
      }
    },
    /**
     * Returns Discord status colors.
     * @returns {string} Tailwind color classes
     */
    getDiscordStatus() {
      switch (this.lanyard.discord_status) {
        case "online":
          return "bg-green-500"
        case "idle":
          return "bg-yellow-500"
        case "dnd":
          return "bg-red-500"
        default:
          return "bg-gray-500 dark:bg-gray-200"
      }
    },
  },
  beforeDestroy() {
    this.socket?.close()
  },
  mounted() {
    /**
     * Connect to Lanyard Socket API, send heartbeat every 30 seconds and replace the Vue data value with the message
     */
    this.socket = new WebSocket("wss://api.lanyard.rest/socket")
    this.socket.addEventListener("open", () => {
      // Subscribe to ID
      this.socket.send(
        JSON.stringify({
          op: 2,
          d: {
            subscribe_to_id: "354343248698802187",
          },
        })
      )
      // Send heartbeat every 30 seconds
      setInterval(() => {
        this.socket.send(
          JSON.stringify({
            op: 3,
          })
        )
      }, 30000)
    })
    this.socket.addEventListener("message", ({ data }) => {
      const { t: type, d: status } = JSON.parse(data)
      if (type === "INIT_STATE" || type === "PRESENCE_UPDATE")
        this.lanyard = status || {}
      this.finished = true
    })
  },
}
</script>