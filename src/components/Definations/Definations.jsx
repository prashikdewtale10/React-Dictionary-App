import { withWidth } from '@material-ui/core'
import React from 'react'
import './definations.css'

const Definations = ({ word, data, category }) => {
    return (
        <div className='meanings'>

            {
                data[0] && word && category==="en" && (
                    <audio 
                    src={data[0].phonetics[0] && data[0].phonetics[0].audio }
                    style={{backgroundColor:'#fff' ,borderRadius:10 , width:"100%" }}
                    controls
                    >
                        Your browser doesn't support audio element.
                    </audio>
                )
            }


            {
                word === "" ? (
                    <span className="subTitle">
                        Start by typing a word in a Search
                    </span>
                ) : (
                    data.map((mean) => (
                        // console.log(mean)
                        mean.meanings.map((item) =>
                            // console.log(item)
                            item.definitions.map((def) => (
                                //    console.log(def)
                                <div className="singleMean">
                                    <b>{def.definition}</b>
                                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                                    {def.example && (
                                        <span>
                                            <b>Example :</b>
                                            {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b>
                                                Synonyms :
                                            </b>
                                            {def.synonyms.map((s) => `${s} ,`)}
                                        </span>
                                    )}
                                </div>

                            ))
                        )
                    ))
                )
            }
        </div>
    )
}

export default Definations
