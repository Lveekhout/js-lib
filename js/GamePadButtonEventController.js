function GamePadButtonEventController() {

    // https://gamepad-tester.com/

    let buttonA = 0
    let buttonX = 0
    let buttonPadLeft = 0
    let buttonPadRight = 0
    let triggerLeft = 0
    let triggerRight = 0
    let axesRightX = 0
    let axesLeftY = 0

    this.onButtonAChanged
    this.onButtonXChanged
    this.onButtonPadLeftChanged
    this.onButtonPadRightChanged
    this.onTriggerLeftChanged
    this.onTriggerRightChanged
    this.onAxesLeftXChanged
    this.onAxesLeftYChanged

    this.updateState = () => {
        const gp = navigator.getGamepads()[0]
        if (gp) {
            if (gp.buttons[0].value != buttonA) {
                buttonA = gp.buttons[0].value
                if (this.onButtonAChanged) this.onButtonAChanged(buttonA)
            }
            if (gp.buttons[2].value != buttonX) {
                buttonX = gp.buttons[2].value
                if (this.onButtonXChanged) this.onButtonXChanged(buttonX)
            }
            if (gp.buttons[6].value != triggerLeft) {
                triggerLeft = gp.buttons[6].value
                if (this.onTriggerLeftChanged) this.onTriggerLeftChanged(triggerLeft)
            }
            if (gp.buttons[7].value != triggerRight) {
                triggerRight = gp.buttons[7].value
                if (this.onTriggerRightChanged) this.onTriggerRightChanged(triggerRight)
            }
            if (gp.buttons[14].value != buttonPadLeft) {
                buttonPadLeft = gp.buttons[14].value
                if (this.onButtonPadLeftChanged) this.onButtonPadLeftChanged(buttonPadLeft)
            }
            if (gp.buttons[15].value != buttonPadRight) {
                buttonPadRight = gp.buttons[15].value
                if (this.onButtonPadRightChanged) this.onButtonPadRightChanged(buttonPadRight)
            }
            if (gp.axes[0] != axesRightX) {
                axesRightX = gp.axes[0]
                if (this.onAxesLeftXChanged) this.onAxesLeftXChanged(axesRightX)
            }
            if (gp.axes[1] != axesLeftY) {
                axesLeftY = gp.axes[1]
                if (this.onAxesLeftYChanged) this.onAxesLeftYChanged(axesLeftY)
            }
        }
    }
}