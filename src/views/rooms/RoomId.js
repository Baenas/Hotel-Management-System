import React, { Component } from "react";

class RoomId extends Component {

  state = {
    data: this.props.data
  }






  handeToChecking = () => {
    const { room } = this.state

    let data = room
    JSON.stringify(data)

    localStorage.setItem('room01', JSON.stringify(data))
    console.log('Item: ' + JSON.stringify(data));


  }




  render() {
    const { data } = this.state
    return (



      < div className=" dashboard-container" >
        <div className="form-main">
          <div className="form-title">
            <div className="form-title-item">
              GUEST INFO
                        </div>
          </div>
          <div className="form-body">
            <div className="form-body-item">
              <div className="form-body-data">
                Full name
                            </div>
              <div className="form-body-data">
                <input className="input-text-form" defaultValue={data.guestID.guestFullName} placeholder="Guest ID" type="text" />

              </div>
            </div>
            <div className="form-body-item">
              <div className="form-body-data">
                Guest Card ID
                            </div>
              <div className="form-body-data">
                <input className="input-text-form" defaultValue={data.guestID.guestIdCard} placeholder="Guest ID" type="text" />

              </div>
            </div>
            <div className="form-body-item">
              <div className="form-body-data">
                Guest Extra
                            </div>
              <div className="form-body-data">
                <input className="input-text-form" defaultValue={data.extraguest[0].name} placeholder="Guest Extra" type="text" />

              </div>
            </div>


          </div>
        </div>
        <div className="" >

        </div>


        <div className="form-main">
          <div className="form-title">
            <div className="form-title-item">
              ROOM INFO
                        </div>
          </div>
          <div className="form-body">
            <div className="form-body-item">
              <div className="form-body-data">
                Room name
                            </div>
              <div className="form-body-data">
                <input name="roomName" className="input-text-form" defaultValue={data.roomID.roomName} placeholder="Room Number" type="text" />

              </div>
            </div>
            <div className="form-body-item">
              <div className="form-body-data">
                Room Type
                            </div>
              <div className="form-body-data">
                <input name="roomName" className="input-text-form" defaultValue={data.roomID.roomType} placeholder="Room Type" type="text" />

              </div>
            </div>


            <div className="form-body-item">
              <div className="form-body-data">
                Room Floor
                            </div>
              <div className="form-body-data">
                <input className="input-text-form" name="roomFloor" defaultValue={data.roomID.roomFloor} placeholder="Room Floor" type="text" />

              </div>
            </div>


            <div className="form-body-item">
              <div className="form-body-data">
                Room Wifi
                            </div>
              <div className="form-body-data">
                <input className="input-text-form" name="roomWifi" defaultValue={data.roomID.roomWifi} placeholder="Room Wifi" type="text" />

              </div>
            </div>



            <div className="form-body-item">
              <div className="form-body-data">
                Room Phone
                            </div>
              <div className="form-body-data">
                <input className="input-text-form" name="roomPhone" defaultValue={data.roomID.roomPhone} placeholder="Room Phone" type="text" />

              </div>
            </div>

            <div className="form-body-item">
              <div className="form-body-data">
                Room Price
                            </div>
              <div className="form-body-data">
                <input className="input-text-form" name="roomPrice" defaultValue={data.roomID.roomPrice} placeholder="Room Price" type="text" />

              </div>
            </div>

          </div>

          <div className="form-title">
            <div className="form-title-item">
              <button type="submit" className="button-submit" >
                Add
                            </button>
            </div>
          </div>
        </div>




      </div >



    );
  }
}

export default RoomId;
