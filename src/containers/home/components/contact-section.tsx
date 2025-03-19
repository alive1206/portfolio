import { FadeDiv } from '@/components'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { formSchema } from '@/schema'
import { classNames } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    toast.success('Your message has been sent.')
    form.reset()
  }

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
    <div className="absolute left-[300vw] h-full w-full">
      <div className="flex h-[calc(100vh-200px)] flex-col justify-center px-4">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="">
          <FadeDiv className="mb-6 text-center text-4xl uppercase">Hire this pawn</FadeDiv>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col items-center space-y-2">
              <FadeDiv className={classNames('w-1/4 max-lg:w-full')}>
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input className="shadow-sm backdrop-blur-sm hover:shadow-pink-200" placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FadeDiv>
              <FadeDiv className={classNames('w-1/4 max-lg:w-full')}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input className="shadow-sm backdrop-blur-sm hover:shadow-pink-200" placeholder="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FadeDiv>
              <FadeDiv className={classNames('w-1/4 max-lg:w-full')}>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="shadow-sm backdrop-blur-sm hover:shadow-pink-200"
                          placeholder="message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FadeDiv>
              <FadeDiv className={classNames('max-lg:w-full')}>
                <Button
                  type="submit"
                  className={classNames('shadow-sm backdrop-blur-sm hover:shadow-pink-200 max-lg:mt-2 max-lg:w-full')}
                >
                  Submit
                </Button>
              </FadeDiv>
            </form>
          </Form>
        </motion.div>
      </div>
    </div>
  )
}
