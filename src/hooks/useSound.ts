import { useEffect, useState } from "react"

export const useSound = (
  urls: string[],
): [
  {
    url: string
    playing: boolean
    id: number
  }[],
  {
    url: string
    muted: boolean
    id: number
  }[],
  (targetIndex: number) => void,
  (targetIndex: number) => void,
] => {
  const [sources] = useState(
    urls.map((url, i) => {
      return {
        url,
        audio: new Audio(url),
        id: i,
      }
    }),
  )

  const [players, setPlayers] = useState(
    urls.map((url, id) => {
      return {
        url,
        playing: false,
        muted: false,
        id,
      }
    }),
  )

  const [muteds, setMuteds] = useState(
    urls.map((url, id) => {
      return {
        url,
        muted: false,
        id,
      }
    }),
  )

  useEffect(() => {
    sources.forEach((source, i) => {
      if (players[i].playing) {
        source.audio.currentTime = 0
        source.audio.play()
      } else {
        source.audio.pause()
      }
      players[i].id = source.id
    })
  }, [sources, players])

  useEffect(() => {
    sources.forEach((source, i) => {
      if (muteds[i].muted) {
        source.audio.volume = 0
      } else {
        source.audio.volume = 1
      }

      muteds[i].id = source.id
    })
  }, [sources, muteds])

  useEffect(() => {
    sources.forEach((source, i) => {
      source.audio.addEventListener("ended", () => {
        const newPlayers = [...players]
        newPlayers[i].playing = false
        setPlayers(newPlayers)
      })
    })
    return () => {
      sources.forEach((source, i) => {
        source.audio.removeEventListener("ended", () => {
          const newPlayers = [...players]
          newPlayers[i].playing = false
          setPlayers(newPlayers)
        })
      })
    }
  }, [])

  const toggle = (targetIndex: number) => {
    const newPlayers = [...players]
    const newMuteds = [...muteds]
    const currentIndex = players.findIndex(p => p.playing === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newPlayers[currentIndex].playing = false
      newMuteds[currentIndex].muted = false
      newPlayers[targetIndex].playing = true
      newMuteds[targetIndex].muted = false
    } else if (currentIndex !== -1) {
      newPlayers[targetIndex].playing = false
      newMuteds[targetIndex].muted = false
    } else {
      newPlayers[targetIndex].playing = true
      newMuteds[targetIndex].muted = false
    }
    setPlayers(newPlayers)
    setMuteds(newMuteds)
  }

  const mute = (targetIndex: number) => {
    const newMuteds = [...muteds]
    const currentIndex = muteds.findIndex(p => p.muted === true)
    if (currentIndex !== -1 && currentIndex !== targetIndex) {
      newMuteds[currentIndex].muted = false
      newMuteds[targetIndex].muted = true
    } else if (currentIndex !== -1) {
      newMuteds[targetIndex].muted = false
    } else {
      newMuteds[targetIndex].muted = true
    }
    setMuteds(newMuteds)
  }

  return [players, muteds, toggle, mute]
}
