
const imageResize = (scale, img) =>  {
    var MAX_WIDTH = scale;
    var MAX_HEIGHT = scale;
    var width = img.width;
    var height = img.height;

    if (width > height) {
        if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
        }
    } else {
        if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
        }
    }
    return { height, width }

}
export default imageResize

