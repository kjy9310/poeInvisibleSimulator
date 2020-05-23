import React, { useState } from 'react';
import Pie from './graph.js';
import Inputs from './inputs.js';

function Main() {
  
  const [inputs, setInputs] = useState({
    shadeFormDuration:4,
    shadeFormCooldown:45,
    increasedDuration:0,
    cooldownReduction:0,
    curse:1,
    aspectCatDuration1:4,
    aspectCatDuration2:6,
    shadeFormIncreasedDuration:0,
    aspectCatIncreasedDuration1:0,
    aspectCatIncreasedDuration2:0
  })
  const {
    shadeFormDuration,
    shadeFormCooldown,
    cooldownReduction,
    increasedDuration,
    curse,
    increasedCurseEffectiveness,
    aspectCatDuration1,
    aspectCatDuration2,
    shadeFormIncreasedDuration,
    aspectCatIncreasedDuration1,
    aspectCatIncreasedDuration2
  } = inputs
  const calculatedShadeFormCooldown = shadeFormCooldown * (100-cooldownReduction)/100

  const tempChainEffective = (curse) 
    ? 1 + 40 * (1+(increasedCurseEffectiveness-50)/100) / 100
    : 1

  const cappedTempChainEffective = tempChainEffective>1.75 ? 1.75 : tempChainEffective

  const calculatedShadeFormDuration = shadeFormDuration * (1+(increasedDuration+shadeFormIncreasedDuration)/100) * cappedTempChainEffective

  const calculatedAspectCatDuration1 = aspectCatDuration1 * (1+(increasedDuration+aspectCatIncreasedDuration1)/100) * cappedTempChainEffective

  const calculatedAspectCatDuration2 = aspectCatDuration2 * (1+(increasedDuration-aspectCatIncreasedDuration2)/100) * cappedTempChainEffective
  
  return (
    <div className="App">
      <div className="grapharea">
        <div style={{
          padding:'20px'
        }}>
          <span
            style={{color:'MediumPurple'}}
          > 
          Shade Form : {parseInt(calculatedShadeFormDuration * 100)/100}s</span>
          <br/>
          <span
            style={{color:'LimeGreen'}}
          > Aspect of the Cat Base : {parseInt(calculatedAspectCatDuration1 * 100)/100}s </span>
          <br/>
          <span
            style={{color:'grey'}}
          > Aspect of the Cat Secondary : {parseInt(calculatedAspectCatDuration2 * 100)/100}s </span>
          <br/>
          <span style={{color:'black'}}>
            Shade Form cooldown : {parseInt(calculatedShadeFormCooldown * 100)/100}s
          </span>
        </div>
        <div className="graphs">
          <Pie
            degree={(calculatedShadeFormDuration / calculatedShadeFormCooldown * 360)} 
            style={
              {
                position:'absolute',
                width:"350px",
                height:"350px",
              }
            }
            pieColor="white"
            invertColor="MediumPurple"
          />
          <Pie
            degree={(calculatedAspectCatDuration1 / calculatedShadeFormCooldown * 360)} 
            style={
              {
                position:'absolute',
                width:"250px",
                height:"250px",
                margin: '50px 50px',
                transform: `rotate(${(calculatedShadeFormDuration / calculatedShadeFormCooldown * 360)}deg)`
              }
            }
            pieColor="white"
            invertColor="LimeGreen"
          />
          <Pie
            degree={(calculatedAspectCatDuration2 / calculatedShadeFormCooldown * 360)} 
            style={
              {
                position:'absolute',
                width:"150px",
                height:"150px",
                margin: '100px 100px',
                transform: `rotate(${(calculatedShadeFormDuration / calculatedShadeFormCooldown * 360)+(calculatedAspectCatDuration1 / calculatedShadeFormCooldown * 360)}deg)`
              }
            }
            pieColor="white"
            invertColor="grey"
          />
          <div style={{
            position:'absolute',
            width:"50px",
            height:"50px",
            margin: '150px 150px',
            backgroundColor: 'white',
            borderRadius:'50%',
            }}>
          </div>
        </div>
      </div>
        <Inputs style={{
          textAlign:"left",
          padding:"20px"
        }} data={inputs} callback={setInputs}/>
    </div>
  );
}

export default Main;
