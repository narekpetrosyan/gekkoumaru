import { FC, useState } from "react"

interface PlayerProps {
  players: { url: string; playing: boolean; id: number }[]
  muteds: { url: string; muted: boolean; id: number }[]
  toggle: (i: number) => void
  mute: (i: number) => void
}

const MUSIC_NAMES: Record<string, string> = {
  "0": "Joe Hisaishi - Merry-Go-Round of Life (from Howls Moving Castle).mp3",
  "1": "Spirited Away Theme Song (piano).mp3",
}

const MUSIC_LOGOS: Record<string, string> = {
  "0": "/images/merry_go.png",
  "1": "/images/spirited.png",
}

export const Player: FC<PlayerProps> = ({ players, muteds, toggle, mute }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePlay = (index: number) => {
    toggle(index)
  }

  return (
    <div className="flex items-center rounded-[64px] bg-[rgba(255,255,255,0.1)] max-w-[550px] p-6 w-full justify-between border border-[rgba(255,255,255,0.2)]">
      <div className="flex items-center gap-3">
        <div className="lg:w-[53px] w-[27px] lg:h-[53px] h-[27px] rounded-full bg-[#d9d9d9]">
          <img
            src={MUSIC_LOGOS[players[activeIndex].id]}
            alt={MUSIC_LOGOS[players[activeIndex].id]}
          />
        </div>
        <p className="lg:max-w-[250px] max-w-[120px] text-white lg:text-[32px] text-base truncate">
          {MUSIC_NAMES[players[activeIndex].id]}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="border-none outline-none flex items-center justify-center cursor-pointer hover:opacity-60"
          onClick={() =>
            setActiveIndex(prev => {
              if (prev !== players.length - 1) {
                prev = players.length - 1
              } else {
                prev -= 1
              }
              if (players[activeIndex].playing) {
                handlePlay(prev)
              }
              return prev
            })
          }
        >
          <img src="/images/prev.svg" alt="prev" />
        </button>
        <button
          className="hover:opacity-60 border-none outline-none flex items-center justify-center cursor-pointer"
          onClick={() => handlePlay(activeIndex)}
        >
          {!players[activeIndex].playing ? (
            <img src="/images/play.svg" alt="play" />
          ) : (
            <img src="/images/pause.svg" alt="pause" />
          )}
        </button>
        <button
          className="hover:opacity-60 border-none outline-none flex items-center justify-center cursor-pointer"
          onClick={() => {
            setActiveIndex(prev => {
              if (prev === players.length - 1) {
                prev = 0
              } else {
                prev += 1
              }
              if (players[activeIndex].playing) {
                handlePlay(prev)
              }
              return prev
            })
          }}
        >
          <img src="/images/next.svg" alt="next" />
        </button>
        <button
          className="hover:opacity-60 border-none outline-none flex items-center justify-center cursor-pointer"
          onClick={() => mute(activeIndex)}
        >
          {muteds[activeIndex].muted ? (
            <img src="/images/mute.svg" alt="mute" />
          ) : (
            <img src="/images/unmute.svg" alt="un-mute" />
          )}
        </button>
      </div>
    </div>
  )
}
