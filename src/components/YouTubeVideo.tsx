'use client';

export default function YouTubeVideo() {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-4xl mx-auto rounded-xl shadow-lg">
      <iframe
        src="https://www.youtube.com/embed/XjEZhcVz0WU"
        title="Video sobre reciclaje"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full rounded-xl"
      />
    </div>
  );
}
