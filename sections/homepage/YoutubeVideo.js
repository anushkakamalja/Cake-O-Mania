import VideoSlider from '../../components/VideoSlider';

const Video = () => {
    return (
        <div className="bg-video-bg bg-no-repeat bg-cover relative bg-local  flex flex-col items-center p-20  ">
            <h2 className="text-black w-2/5 left-16 relative text-center  font-header text-5xl">Our Youtube Videos</h2>
            <VideoSlider />
            
        </div>
    );
};
export default Video;
