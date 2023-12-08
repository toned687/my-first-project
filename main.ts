let motor_speed = 75
basic.forever(function () {
    lineSensors.displaySensors()
    if (lineSensors.checkSensor(IRSensor.LEFT, IRColour.BLACK)) {
        motion.turnLeft(motor_speed)
    } else if (lineSensors.checkSensor(IRSensor.MIDDLE, IRColour.BLACK)) {
        motion.driveStraight(motor_speed)
    } else if (lineSensors.checkSensor(IRSensor.RIGHT, IRColour.BLACK)) {
        motion.turnRight(motor_speed)
    }
})
