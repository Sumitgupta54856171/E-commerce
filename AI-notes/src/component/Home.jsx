import Slide from "./Slide";
import CategoryGrid from "./Showcase";
import Itemlist from "./Itemlist";

function Home() {
    return (
        <>
            {/* Removed fixed grid-row heights and overflow-auto */}
            <div className="box-border">
                <div>
                    <Slide></Slide>
                </div>
                <div className="border-0 border-blue-200">
                    <CategoryGrid />
                </div>
                <section className="text-black">
                    <p>welcome</p>
                </section>
                <div className="flex flex-col md:flex-row">
                    <div>
                        <p className="flex flex-row">
                            <span className="flex-cols items-center justify-center">
                                <img src="https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/tshirt_hs_men_pat_d48_o.jpg" className="m-2 " sizes="50"></img>
                            </span>
                            <img src="https://plus.unsplash.com/premium_photo-1674828601362-afb73c907ebe?fm=j…ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amVhbnN8ZW58MHx8MHx8fDA%3D" className="m-4 h-120 w-150"></img>
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <img src="https://c4.wallpaperflare.com/wallpaper/834/803/601/nature-glass-sun-rayban-wallpaper-preview.jpg" className="m-2" ></img>
                        <img src="https://www.leafstudios.in/cdn/shop/files/1_1099cd20-7237-4bdf-a180-b7126de5ef3d.png?v=1722230645" className="size-100 m-4"></img>
                    </div>
                </div>
                <section className="text-black">
                    <Itemlist></Itemlist>
                </section>
            </div>
            <footer className="text-black">
                <p>footer</p>
            </footer>
        </>
    );
}
export default Home;