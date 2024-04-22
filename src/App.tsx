import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'

function Page() {
  const [polls, setPolls] = useState([])

  useEffect(() => {
    async function getPolls() {
      const { data } = await supabase.from('polls').select()

      setPolls(data)
    }

    getPolls()
  }, [])

  return (
    <div>
      {polls.map((poll) => (
        <li key={poll.title}>{poll.title}</li>
      ))}
    </div>
  )
}
export default Page
