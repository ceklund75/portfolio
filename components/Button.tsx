import { ReactElement } from 'react'

type ButtonProps = {
  name: string
  cssClass: string
  clickHandler: () => void
}

export function Button({ name, cssClass, clickHandler }: ButtonProps): ReactElement {
  return (
    <button type="button" onClick={() => clickHandler} className={cssClass}>
      {name}
    </button>
  )
}
