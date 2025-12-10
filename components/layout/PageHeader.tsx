import { ReactElement } from 'react'
import { styles } from '@/lib/styles'

type PageHeaderProps = {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps): ReactElement {
  return (
    <header className={`${styles.header}`}>
      <h1 className={styles.heading.h1}>{title}</h1>
      <p className={styles.text.lead}>{description}</p>
    </header>
  )
}
