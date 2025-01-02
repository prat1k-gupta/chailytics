
import ReactMarkdown from 'react-markdown';
export const ChatResponse = ({ content }: { content: string }) => {

    return <ReactMarkdown>{content}</ReactMarkdown>

};