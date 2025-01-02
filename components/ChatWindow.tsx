'use client'

import { useState, useEffect, useRef } from 'react'
import { Send } from 'lucide-react'
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
      tweaks: {
        "ChatInput-BNMRR": {},
        "ParseData-Iilmz": {},
        "Prompt-1c2j6": {},
        "SplitText-67Dwh": {},
        "OpenAIModel-rmXlS": {},
        "ChatOutput-WHodt": {},
        "AstraDB-MPTYN": {},
        "OpenAIEmbeddings-RErgG": {},
        "AstraDB-rbE4p": {},
        "OpenAIEmbeddings-Zbmtg": {},
        "File-BqiyE": {}
      }
    };
    try {
      const res = await axios.post('/api/proxy', data)
      console.log(res.data?.outputs[0]?.outputs[0]?.artifacts?.message, "<---  final response")
      return res.data?.outputs[0]?.outputs[0]?.artifacts?.message
    } catch (error) {
      console.error(error)
    }
  }

  const handleSend = async () => {
    const data: string = await getMessageFromAi(input)
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: input,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, newMessage])
      setInput('')

      // Simulate AI response
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'ai',
          content: data,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, aiMessage])
      }, 1000)
    }
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
    <Card className="w-full h-[400px] flex flex-col bg-[#FFF8E1] border-[#BCAAA4]">
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
                <div className={`inline-block max-w-[80%] ${message.role === 'user' ? 'bg-[#795548] text-white' : 'bg-[#D7CCC8] text-[#5D4037]'} p-3 rounded-lg shadow-md`}>
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
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your analytics..."
            className="flex-grow bg-white border-[#BCAAA4]"
          />
          <Button type="submit" className="bg-[#795548] text-white hover:bg-[#5D4037]">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}

