import { Player } from "./components/Player"
import { useSound } from "./hooks/useSound"

function App() {
  const [players, muteds, toggle, mute] = useSound([
    "/music/marry_go_round.mp3",
    "/music/spirited_away.mp3",
  ])

  return (
    <div className="absolute inset-0 lg:px-16 lg:py-12 px-4 py-2 flex flex-col justify-between">
      <video id="background_video" autoPlay loop muted className="player">
        <source type="video/mp4" src="/video/bg_video.mp4" />
      </video>

      <div className="flex lg:justify-start justify-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="logo"
            className="lg:w-[60px] lg:h-[60px] w-[33px] h-[33px]"
          />
          <h1 className="text-white lg:text-52 text-36">Gekkoumaru</h1>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center gap-8">
        {/* <h2 className="text-white lg:text-64 text-48 whitespace-nowrap">COMING SOON</h2> */}

        <div className="flex sm:hidden items-center lg:gap-6 gap-3">
          <a
            href=""
            className="p-2 flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"
          >
            <img src="/images/x.svg" alt="x" className="w-full h-full" />
          </a>
          <a
            href=""
            className="p-2 flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"
          >
            <img src="/images/tg.svg" alt="tg" className="w-full h-full" />
          </a>
          <a
            href=""
            className="p-2 flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"
          >
            <img src="/images/dexscreener.svg" className="w-full h-full" alt="dexscreener" />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <Player players={players} muteds={muteds} toggle={toggle} mute={mute} />

        <div className="sm:flex hidden items-center lg:gap-6 gap-3">
          <a
            href="https://x.com/GekkoumaruBase?t=UAffhgh65GGlX2WIcplAkQ&s=09"
            target="_blank"
            className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"
          >
            <img src="/images/x.svg" alt="x" />
          </a>
          <a
            href="https://t.me/GekkoumaruOnBase"
            target="_blank"
            className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"
          >
            <img src="/images/tg.svg" alt="tg" />
          </a>
          <a
            href=""
            className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)]"
          >
            <img src="/images/dexscreener.svg" alt="dexscreener" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
