var RenderTextureCanvas = {

    fill: function (rgb)
    {
        var ur = ((rgb >> 16)|0) & 0xff;
        var ug = ((rgb >> 8)|0) & 0xff;
        var ub = (rgb|0) & 0xff;

        this.context.fillStyle = 'rgb(' + ur + ',' + ug + ',' + ub + ')';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        return this;
    },

    clear: function ()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        return this;
    },

    draw: function (texture, frame, x, y)
    {
        var matrix = this.currentMatrix;
        this.context.setTransform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
        this.context.drawImage(texture.source[frame.sourceIndex].image, frame.x, frame.y, frame.width, frame.height, x, y, frame.width, frame.height);
        return this;
    }

};

module.exports = RenderTextureCanvas;
