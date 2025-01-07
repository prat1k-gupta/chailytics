'use client'

import { useState, useEffect, useRef } from 'react'
import { Send, Loader2 } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'
import { ChatResponse } from './MarkdownResults'

type Message = {
  id: string
  role: 'user' | 'ai'
  content: string
  timestamp: Date
}

export function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const getMessageFromAi = async (inputData: string) => {
    const data = {
      input_value: inputData,
      output_type: "chat",
      input_type: "chat",
      tweaks: { /* Your tweaks object */ }
    }
    try {
      const res = await axios.post('/api/proxy', data)
      return res.data?.outputs[0]?.outputs[0]?.artifacts?.message
    } catch (error) {
      console.error(error)
      return "An error occurred while processing your request."
    }
  }

  const handleSend = async () => {
    if (!input.trim() || loading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    const aiResponse = await getMessageFromAi(input)
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'ai',
      content: aiResponse || "I'm sorry, I couldn't process that.",
      timestamp: new Date()
    }

    setMessages((prev) => [...prev, aiMessage])
    setLoading(false)
  }

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card className="w-full min-h-[500px] md:min-h-[800px] flex flex-col bg-[#FFF8E1] border-[#BCAAA4]">
      <CardHeader className="bg-[#D7CCC8]">
        <CardTitle className="text-[#5D4037]">Chat with AI Analyst</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-4">
        <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block max-w-[80%] ${message.role === 'user' ? 'bg-[#795548] text-white' : 'bg-[#D7CCC8] text-[#5D4037]'} p-3 rounded-lg shadow-md`}
                >
                  <p className="mb-1">
                    <ChatResponse content={message.content} />
                  </p>
                  <p className="text-xs opacity-70">{formatTimestamp(message.timestamp)}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </ScrollArea>
      </CardContent>
      <CardFooter className="bg-[#EFEBE9] p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex w-full space-x-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your analytics..."
            className="flex-grow bg-white border-[#BCAAA4]"
            disabled={loading}
          />
          <Button type="submit" className="bg-[#795548] text-white hover:bg-[#5D4037]" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
