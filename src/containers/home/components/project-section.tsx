import { FadeDiv } from '@/components'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { projectList } from '@/utils'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { map } from 'lodash'
import Link from 'next/link'
import { useState } from 'react'

export const ProjectSection = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 3
  const totalPages = Math.ceil(projectList?.length / itemsPerPage)
  const currentItem = projectList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  }
  return (
    <div className="absolute left-[200vw] h-full w-full">
      <motion.div
        key={currentPage}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-2 flex h-[calc(100vh-250px)] flex-col justify-center gap-4 overflow-y-hidden px-4"
      >
        {map(currentItem, (project) => (
          <FadeDiv className="rounded border p-4 shadow-md backdrop-blur-sm hover:shadow-pink-200" key={project?.id}>
            <div>{project?.name}</div>
            <div className="flex items-center">
              <div className="max-w-[50%] truncate text-gray-300">{project?.description}</div>
              <div className="mx-2 mb-1 flex-1 self-end border-b border-dashed border-gray-300 bg-transparent" />
              <div className="text-gray-300">{dayjs(project.date).format('MMM DD,YYYY')}</div>
            </div>
            <div className="flex justify-end gap-2">
              <Link href={project?.gitLink} target="_blank" title="Github">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href={project?.demoLink} target="_blank" title="Live Demo">
                <FontAwesomeIcon icon={faGlobe} />
              </Link>
            </div>
          </FadeDiv>
        ))}
      </motion.div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage(currentPage - 1)
              }}
              className={`cursor-pointer ${currentPage === 1 && 'hidden'}`}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentPage(index + 1)
                }}
                isActive={currentPage === index + 1 && true}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault()
                setCurrentPage(currentPage + 1)
              }}
              className={`cursor-pointer ${currentPage === totalPages && 'hidden'}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
