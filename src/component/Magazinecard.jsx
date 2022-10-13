import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Magazinecard = () => {

  const [sheetData, setsheetData] = useState('')
  useEffect(() => {
    async function sheetApi() {
      const sheetResult = await axios.get("https://sheets.googleapis.com/v4/spreadsheets/1PGhCt-v2KxPzy3lASAS5cq-AUJL85H6TpziqBXnf8S0/values/apisheet?key=AIzaSyCWKgfhMzfqrzxG_lzPaxz17Y6PTwiYvG4")
      setsheetData(sheetResult.data)
    }
    sheetApi()
    // console.log(sheetData)
  }, [sheetData])
  let dataArray = sheetData.values;
  return (
    <>
      <div className="exlusivenews_card box">
        <h5 className="title_head">Magazine Exclusives</h5>

        <ul className="media_list" id="data_list">

          {
            dataArray &&
            (dataArray).map((values, index) => {

              return (
                <li className="media media_box" key={index}>
                  <div className="img_box">
                    <img className="img_card" src={values[1]} alt="image" />
                  </div>
                  <div className="title_box">
                    <h6 className="title">{values[0]}</h6>
                  </div>
                </li>
              )

            })
          }

        </ul>

      </div>
    </>
  );
}

export default Magazinecard;
