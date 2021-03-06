module.exports = {
    /**
     * Shuffles given array randomly.
     * @param {array} array - Sprite's texture.
     */
    shuffle: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },
    /**
     * Returns coordinate on certain circle by radius and angle.
     * @param {number} distance - distance to the coordinate.
     * @param {number} angle - angle to the coordinate relative to y axis.
     */
    getCoordinateByAngle: function (distance, angle) {
        var angleInRadian = angle * Math.PI / 180;
        return [-(distance * Math.sin(angleInRadian)), -(distance * Math.cos(angleInRadian))];
    },
    /**
     * Returns random index for an array.
     * @param {array} arr - array to get index from.
     */
    getRandomIndex: function (arr) {
        return Math.floor(Math.random() * arr.length);
    },
    /**
     * Returns win ratio.
     * @param {number} num - number to get the ratio.
     */
    getWinRatio: function (num) {
        switch (num) {
            case 1:
                return 2;
            case 3:
                return 3;
            case 5:
                return 6;
            default:
                console.error('Invalid value provided');
                return;
        }
    }
}
