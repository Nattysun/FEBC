import { ReactNode } from "react";

type  SectionProps = {
  title?: string
  children: ReactNode
}

const Section = ({title="Section", children}: SectionProps) =>{
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  )
}

export default Section