import React from 'react';
import OptionsList from './optionsList';
import './listItem.css';

const List = ({ data, title }) => {

    return (
        <>
            <div className="row ">
                <div className="col-5 mt-3 p-3 bg-primary text-white rounded">
                    <div className='mb-3 '>
                        <span className="h1 title">{title}</span>
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

                </div>
            </div >
        </>
    )
}
export default List;