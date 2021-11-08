import React from 'react';
import OptionsList from './optionsList';
import './listItem.css';

const List = ({ data, title, total }) => {
    return (
        <>

            <div className="col-5 my-1 mx-4 p-2 bg-light rounded">
                <div className='mb-3 '>
                    <span className="h3 title">{title}</span>
                </div>
                {
                    data.map((items) => {
                        return (
                            <>
                                <OptionsList
                                    id={items.id}
                                    polls={items.name}
                                    vote={items.vote}

                                />
                            </>
                        )
                    })
                }

                <div>
                    <h4 className='text-center text-secondary pt-2'>TOTAL : {total}</h4>
                </div>

            </div>

        </>
    )
}
export default List;