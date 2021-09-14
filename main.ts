basic.forever(function () {
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Left
    )) {
        basic.showIcon(IconNames.Yes)
        basic.showString("0")
        basic.pause(1000)
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Right
    )) {
        basic.showIcon(IconNames.Rollerskate)
        basic.showString("1")
        basic.pause(100)
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Up
    )) {
        basic.showIcon(IconNames.Heart)
        basic.showString("2")
        basic.pause(100)
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Down
    )) {
        basic.showIcon(IconNames.Cow)
        basic.showString("3")
        basic.pause(100)
    }
    if (mbit_输入类.Rocker(
    AnalogPin.P2,
    AnalogPin.P1,
    DigitalPin.P0,
    mbit_输入类.enRocker.Press
    )) {
        basic.showIcon(IconNames.No)
        basic.showString("4")
        basic.pause(100)
    }
})
