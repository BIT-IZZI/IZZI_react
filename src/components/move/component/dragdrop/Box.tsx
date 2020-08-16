import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes'

const style: React.CSSProperties = {
    color: 'yellow',
    fontSize: '20px',
    fontWeight: "bold",
    position: 'absolute',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'move',
}
export interface BoxProps {
    id: any
    left: number
    top: number
    hideSourceOnDrag?: boolean
}
export const Box: React.FC<BoxProps> = ({
                                            id,
                                            left,
                                            top,
                                            hideSourceOnDrag,
                                            children,
                                        }) => {
    const [{ isDragging }, drag] = useDrag({
        item: { id, left, top, type: ItemTypes.BOX },
        collect: (monitor:any) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }
    return (
        <div ref={drag} style={{ ...style, left, top }}>
            {/*        <img src={red}/>*/}
            {children}
        </div>
    )
}
