import { AuthorContent } from '../lib/authors'

type Props = {
  author: AuthorContent
}
export default function Author({ author }: Props) {
  return <span className="text-gray-500">{author.name}</span>
}
