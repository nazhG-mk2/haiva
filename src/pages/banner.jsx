const Banner = () => {
    return (
        <section className="text-3xl p-24 md:p-6 bg-dashboard-img text-white text-shadow">
            <h2 className="w-1/2 md:w-full mb-2 text-balance font-poppins">Therapist Mental Well-being <span
                className="font-bold">Matters</span></h2>
            <p className="w-[30%] md:w-3/4 text-xs text-shadow">At <span className="font-bold">innerecho</span>, we are merging compassionate care with cutting-edge AI to empower mental health professionals.</p>
            <button className="text-xs py-3 px-9 border rounded bg-white hover:bg-gray-50 text-gray-900 mt-4 border-gray-800 hover:border-gray-950 transition duration-300 hover:shadow-lg hover:text-gray-950">Learn more</button>
        </section>
    );
}

export default Banner;