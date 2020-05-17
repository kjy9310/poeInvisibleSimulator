import React from 'react';

function Inputs({data, callback, style}) {
    const setValues = (event)=>{
        const { name, value } = event.target
        console.log(value)
        callback({
            ...data,
            [name]:isNaN(parseInt(value))?0:parseInt(value)
        })
    }
    return (
        <div style={style} className="inputarea">
            <div>
                <label>
                    <span> cooldown Reduction : </span>
                    <input name="cooldownReduction" onChange={setValues}/>%
                </label>
            </div>
            <div>
                <label>
                    <span> increased Duation : </span>
                    <input name="increasedDuration" onChange={setValues}/>%
                </label>
            </div>
            <div>
                <label>
                    <span> temporal chain : </span>
                    <input type="checkbox" name="curse" checked={data.curse==1} value={data.curse==1?0:1} onChange={setValues}/>
                </label>
                <label>
                    <span> increased Curse Effectiveness : </span>
                    <input name="increasedCurseEffectiveness" onChange={setValues}/>%
                </label>
            </div>
            <div>
                <label>
                <span> shade Form Increased Duration : </span>
                    <input name="shadeFormIncreasedDuration" onChange={setValues}/>%
                </label>
            </div>
            <div>
                <label>
                    <span> first Aspect Of The Cat Increased Duration : </span>
                    <input name="aspectCatIncreasedDuration1" onChange={setValues}/>%
                </label>
            </div>
            <div>
                <label>
                    <span> second Aspect Of The Cat Reduced Duration : </span>
                    <input name="aspectCatIncreasedDuration2" onChange={setValues}/>%
                </label>
            </div>
        </div>
    )
}

export default Inputs;