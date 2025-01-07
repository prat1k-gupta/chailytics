'use client'

import { useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Heart, Info, PlayCircle, ImageIcon, BarChart3 } from 'lucide-react'
import { ChatWindow } from './ChatWindow'

export default function AnalyticsDashboard() {
  // const [selectedPeriod, setSelectedPeriod] = useState('today')

  // const aiSummary = {
  //   today: "Today's performance shows a 15% increase in engagement compared to yesterday. Reels are performing exceptionally well.",
  //   week: "This week's data indicates a growing trend in carousel posts, with a 25% higher engagement rate than last week.",
  //   month: "Monthly analysis reveals that your audience is most active during evenings. Consider scheduling important posts during peak hours."
  // }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF8E1] to-[#FFE0B2]">
      <div className="container mx-auto p-6 space-y-8">
        {/* <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold text-[#795548]">Social Media Analytics</h1>
          <Tabs defaultValue="today" className="w-full sm:w-[300px]" onValueChange={setSelectedPeriod}>
            <TabsList className="grid w-full grid-cols-3 bg-[#D7CCC8]">
              <TabsTrigger
                value="today"
                className="data-[state=active]:bg-[#795548] data-[state=active]:text-white"
              >
                Today
              </TabsTrigger>
              <TabsTrigger
                value="week"
                className="data-[state=active]:bg-[#795548] data-[state=active]:text-white"
              >
                Week
              </TabsTrigger>
              <TabsTrigger
                value="month"
                className="data-[state=active]:bg-[#795548] data-[state=active]:text-white"
              >
                Month
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div> */}

        {/* <Card className="backdrop-blur-sm bg-white/80 border-[#BCAAA4] shadow-lg">
          <CardHeader>
            <CardTitle className="text-[#5D4037]">AI Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#795548]">{aiSummary[selectedPeriod as keyof typeof aiSummary]}</p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="backdrop-blur-sm bg-white/80 border-[#BCAAA4] shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#5D4037]">Total Posts</CardTitle>
              <ImageIcon className="h-4 w-4 text-[#795548]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#795548]">1,000</div>
              <p className="text-xs text-[#8D6E63]">
                +180 from last month
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white/80 border-[#BCAAA4] shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#5D4037]">Total Reels</CardTitle>
              <PlayCircle className="h-4 w-4 text-[#795548]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#795548]">10,000</div>
              <p className="text-xs text-[#8D6E63]">
                +2,100 from last month
              </p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-white/80 border-[#BCAAA4] shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#5D4037]">
                Total Likes
                <HoverCard>
                  <HoverCardTrigger>
                    <Info className="h-4 w-4 ml-2 inline-block text-[#795548]" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white/95 backdrop-blur-sm border-[#BCAAA4]">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-[#5D4037]">Last 24 hours</h4>
                        <p className="text-sm text-[#8D6E63]">
                          Gained +2,000 new likes
                        </p>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </CardTitle>
              <Heart className="h-4 w-4 text-[#795548]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#795548]">10,000</div>
              <p className="text-xs text-[#8D6E63]">
                +3,200 from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="backdrop-blur-sm bg-white/80 border-[#BCAAA4] shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#5D4037]">Recent Post Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#EFEBE9]">
                <Avatar className="h-12 w-12 border-2 border-[#A1887F]">
                  <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                  <AvatarFallback className="bg-[#D7CCC8] text-[#5D4037]">PG</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-[#5D4037]">Latest Reel</p>
                  <div className="flex items-center text-sm text-[#8D6E63]">
                    <Heart className="h-4 w-4 mr-1 text-[#795548]" />
                    1,000 likes
                  </div>
                </div>
                <PlayCircle className="h-8 w-8 text-[#795548]" />
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/80 border-[#BCAAA4] shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#5D4037]">GPT Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#EFEBE9]">
                <BarChart3 className="h-8 w-8 text-[#795548]" />
                <div>
                  <p className="text-sm text-[#5D4037]">Reels drive 2x more comments compared to other formats.</p>
                  <p className="text-xs text-[#8D6E63] mt-1">Based on last 30 days of data</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#EFEBE9]">
                <BarChart3 className="h-8 w-8 text-[#795548]" />
                <div>
                  <p className="text-sm text-[#5D4037]">Carousel posts have 20% higher engagement than static posts.</p>
                  <p className="text-xs text-[#8D6E63] mt-1">Based on last 30 days of data</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}

        <ChatWindow />
      </div>
    </div>
  )
}

