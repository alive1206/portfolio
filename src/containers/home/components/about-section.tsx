import { ScaleDiv } from '@/components'
import { classNames } from '@/utils'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export const AboutSection = () => {
  return (
    <div className="absolute left-[100vw] h-full w-full">
      <div
        className={classNames(
          'grid h-[calc(100vh-200px)] grid-cols-2 grid-rows-4 gap-4 px-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:p-4 max-lg:text-[10px]'
        )}
      >
        <ScaleDiv className="row-span-3 p-4 backdrop-blur-sm">
          <h3 className="text-2xl">The rising of the Pawn</h3>
          <p>
            In chess, Pawn is the least important, but it ca&apos;t be missing in the board. Sometimes, it can decide the
            result of the match. And the employee likes me is the same as the Pawn. Have the potentials, but doesn&apos;t
            know how to explore, that&apos;s why the Pawn needs the guide to promote. For now, I am just the Pawn, but in the
            future, I can be the Bishop, Knight or Rook.
          </p>
          <p>
            My journey to become a Frontend Website Developer is miracle. I didn&apos;t try programming till joined
            university and I regret not starting earlier. When tried to create a website using HTML, I enjoyed and decided to
            pursue seriously. I believe within 2-3 years after graduation, I will become the skilled developer and gain
            extensive experience
          </p>
        </ScaleDiv>
        <ScaleDiv className="row-span-2 p-4 backdrop-blur-sm">
          <div>Name: Le Bao Thang</div>
          <div>Birthday: 12-06-2002</div>
          <div>Hobby: 🎮</div>
          <div>Learning: Backend and Chinese</div>
          <div>
            Social:{' '}
            <Link href="https://github.com/alive1206" target="_blank" title="Github">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </div>
        </ScaleDiv>
        <ScaleDiv className="row-span-1 place-content-center place-items-center p-4 backdrop-blur-sm">
          <p>
            <span className="text-2xl">1+</span> years of experience
          </p>
        </ScaleDiv>
        <ScaleDiv className="col-span-2 place-content-center place-items-center p-4 backdrop-blur-sm">
          <img
            alt=""
            src="https://skillicons.dev/icons?i=html,css,js,react,nextjs,tailwind,bootstrap,ts,git,github,gitlab,vscode,mysql,mongodb"
          />
        </ScaleDiv>
      </div>
    </div>
  )
}
