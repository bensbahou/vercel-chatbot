import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  'Hi there!',
  "Can you help me navigate some recent challenges I'm feeling a bit lost",
  `I'm anxious about my career transition. Any guidance on how to cope?`,
  'Could we discuss coping strategies for social discomfort at work ?',
  "I'm dealing with uncertainties in my life. Any insights ?",
  'Can we talk about practical coping skills for heightened anxiety ?'
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Hello! Welcome to Avasana. I&apos;m Dr. Sophia Bennett!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          I&apos;m here to help you understand yourself better.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
