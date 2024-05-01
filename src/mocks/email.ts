export type EmailType = {
  id: string
  name: string
  avatar: string
  marker?: 'important'
  subject: string
  message: string
  star: boolean
  date: string
}

export const EMAILS: EmailType[] = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'https://mighty.tools/mockmind-api/content/human/5.jpg',
    marker: 'important',
    subject: 'What is Lorem Ipsum?',
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    star: false,
    date: '07 de Fev.',
  },
  {
    id: '2',
    name: 'Jane Doe',
    avatar: 'https://mighty.tools/mockmind-api/content/human/68.jpg',
    subject: 'Where does it come from?',
    message:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.',
    star: true,
    date: '11 de Fev.',
  },
  {
    id: '3',
    name: 'Ginger Doe',
    avatar: 'https://mighty.tools/mockmind-api/content/human/49.jpg',
    subject: 'Why do we use it?',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    star: false,
    date: '12 de Fev.',
  },
]
