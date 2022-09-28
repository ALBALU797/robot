Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.RGB_Car_Big(8, 27, 31)
    Mbit_IR.init(Pins.P8)
    mbit_Robot.CarCtrlSpeed2(mbit_Robot.CarState.Car_Left, 115, 123)
    music.ringTone(554)
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.pause(100)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Right)
})
basic.showString("BUENOS DIAS")
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
	
})
