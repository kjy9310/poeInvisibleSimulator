import React from 'react';
const baseStyle = {
    pie:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
    },
    before:{
        position:'absolute',
        display: 'block',
        marginLeft: '50%',
        height: '100%',
        width: '50%',
        borderRadius: '0 100% 100% 0 / 50%',
        transformOrigin: 'left',
    }
}
function Pie({degree=0,style,pieColor='magenta',invertColor="white"}) {
    
    return (
        <div style={style}>
            <div style={{position: "relative", width:'100%', height:'100%'}}>
                <div style={{
                    ...baseStyle.pie,
                    background: pieColor,
                    backgroundImage:`linear-gradient(to right, transparent 50%, ${invertColor} 0)`
                }}></div>
                <div style={
                    {...baseStyle.before, transform: `rotate(${degree>180?degree-180:degree}deg)`, ...(
                        degree>180?{backgroundColor:invertColor}:{backgroundColor: pieColor,}
                        )}
                    }></div>
            </div>
        </div>
    )
}

export default Pie;