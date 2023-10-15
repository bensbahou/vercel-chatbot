import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'

export const runtime = 'edge'

export default function IndexPage() {
  const id = nanoid()

  return (
    // <div style={{ display: 'flex' }}>
    //   <div style={{ width: '50%' }}></div>
    //   <div style={{ width: '50%' }}>
    <Chat id={id} />
    //   </div>
    // </div>
  )
}
