import HeaderCarousel from '../components/HeaderCarousel'
export default function Home() {
  return (
    <div className="w-ful pb-10 mx-20">
      <HeaderCarousel />
      <div className="flex flex-col px-20 pt-10 pb-4 ">
        <h4 className="text-lg text-center">Do you need to unwind and get away from modern life?</h4>
        <p className="text-primary text-4xl text-center">Welcome to Lazy Beach, Koh Rong Sanloem!
        <br/>Tropical paradise like it used to be.</p>
      </div>
      <div className="w-full flex flex-row py-4 my-10">
          <div className="w-full h-auto mx-10 text-xl pl-40">
            <p>Our Lazy Beach vibe is a chilled paradise, set right on the edge of the golden sandy beach with clear blue waters. We are exclusively the only resort in this stunning ocean-facing bay. We like to keep our paradise private and relaxed.</p>
            <p>Our limited number of wooden, coconut-thatched bungalows are surrounded by tropical forest, coconut palms and the ocean, creating natural privacy. Every bungalow has two large, king-size beds, en-suite bathrooms and a spacious balcony offering views of the warm tropical ocean.</p>
          </div>
          <div className="w-full bg-gray-200 ">
          <img className="object-cover object-center rounded-xl" src="/lazybeach/sea-view.jpg" />
          </div>
      </div>
      <div className="w-full flex flex-row px-10 py-4">
        <div className="w-full mx-10">
          <img className="rounded-xl" src="/lazybeach/snail.jpg" />
        </div>
        <div className="w-full h-auto text-xl">
          <p>A long stretch of golden, squeaky clean sand set in the beautiful aquamarine bay, surrounded by tropical jungle. The calm sea offers safe swimming and fantastic snorkeling. Straight off the beach are two of the island’s great dive sites at either end of our bay.</p>
          <p>Give yourself the rare chance to digitally detox from hectic, everyday living. It’s amazing how creative ideas flow when you give yourself space from the constant noise of technology and demanding daily life. It’s what you need. Watch wildlife from up close and be at one with nature. Relax and watch sunlight on waves. Breathe in the fresh breeze blowing through the trees. Whether you want to find time for your creative side or be active we can offer you both.</p>
        </div>
      </div>
      <div className="w-full flex flex-col px-10 py-10 items-center">
        <div>
          <img className="h-96 items-center rounded-xl" src="/lazybeach/sea-view.jpg" />
        </div>
        <div className="w-full h-auto text-center py-10 text-lg">
          <p>If you are looking for a writer’s retreat to finish that novel, if it’s a nature-based yoga, meditation, or wellness retreat you are looking for, this is the place for you</p>
          <p>
            Being the only resort on our private beach, you won’t ever be bothered by someone trying to sell you sunglasses or trinkets on the beach. There are no nightclubs or shops and only one laid-back, grass-roofed bar and restaurant, offering a delicious selection of Eastern and Western styled meals made with our local produce.
          </p>
        </div>
      </div>
      <div>
        <div>
          Our spacious Lazy Beach bar & restaurant is a communal space designed for your comfort and is the ultimate place to unwind. Whether it’s lounging in one of our big comfy moon chairs reading a book or playing cards, relaxing on the fantastic sun deck or lazing back on one of our many sofas all with a view of the beautiful beach and sea.
          Relax and chat with international travelers, make new friendships and chill, or just get some quiet headspace. Enjoy the ever changing sunset views from here or have a seat at our big U-shaped wooden bar, the perfect way to unwind after a hard day on the beach.
        </div>
      </div>
      <div className="flex flex-col gap-6 py-10 px-20 w-full">
        <h3 className="text-4xl">Gallery</h3>
        <div className="grid grid-cols-4 gap-8 w-full items-center">
          <div className="h-auto">
            <img className="object-cover object-center mt-10 rounded-lg" src="/lazybeach/jungle.jpg" />
          </div>
          <div className="h-auto flex flex-col">
            <img className="object-cover object-center mt-10 rounded-lg" src="/lazybeach/view-point.jpg"/>
            <img className="object-cover object-center mt-10 rounded-lg" src="/lazybeach/bird.jpg" />
          </div>
          <div className="h-auto flex flex-col">
            <img className="object-cover object-center mt-10 rounded-lg" src="/lazybeach/part-bungalows.jpeg"/>
            <img className="object-cover object-center mt-10 rounded-lg" src="/lazybeach/bungalow-hammock.jpg"/>
            <img className="object-cover object-center mt-10 rounded-lg" src="/lazybeach/bed-room.jpg" />
          </div>
          <div className="h-auto flex flex-col justify-between gap-6">
            <div className="w-full h-full">
              <img className="object-cover object-center mt-10 rounded-lg" src="/lazybeach/lazybeach-restaurant.jpg" />
            </div>
            <a href="/gallery" className="items-end w-full px-4 py-2 text-sm text-center text-white bg-primary order-last uppercase rounded-lg">more</a>
          </div>
        </div>
      </div>
      <div>
        <div id="TA_certificateOfExcellence188" class="TA_certificateOfExcellence"><ul id="ymJEMbI74" class="TA_links sv0j0v"><li id="rXn1arJH" class="2NKsM3kv"><a target="_blank" href="https://www.tripadvisor.com/Hotel_Review-g2054864-d1379759-Reviews-Lazy_Beach-Koh_Rong_Sanloem_Sihanoukville_Sihanoukville_Province.html"><img src="https://static.tacdn.com/img2/travelers_choice/widgets/tchotel_2021_L.png" alt="TripAdvisor" class="widCOEImg" id="CDSWIDCOELOGO" /></a></li></ul></div><script async src="https://www.jscache.com/wejs?wtype=certificateOfExcellence&amp;uniq=188&amp;locationId=1379759&amp;lang=en_US&amp;year=2021&amp;display_version=2" data-loadtrk onload="this.loadtrk=true"></script>
      </div>
    </div>
  )
}
