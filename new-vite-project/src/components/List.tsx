import { ReactNode } from "react";

interface ListProps<T> {
  items: T[], //T=Generic data
  render: (item: T) => ReactNode //render คือการที่เราสร้าง function render เพื่อบอกว่าเราอยากให้มันแสดงผลยังไง
}

const List = <T,>({ items, render}: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}
/*
function List(){
  return (
    <div>List</div>
  )
}
*/
export default List