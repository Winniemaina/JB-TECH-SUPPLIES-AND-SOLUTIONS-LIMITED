// PRODUCT CATALOGUE

const products = [

    {
        name: "Smartphones",
        category: "Phones",
        description: "Android phones and iPhones.",
        image: "photo-1511707171634-5f897ff02aa9"
    },

    {
        name: "Phone Accessories",
        category: "Phones",
        description: "Phone covers, screen protectors and holders.",
        image: "photo-1605236453806-6ff36851218e"
    },

    {
        name: "Laptops",
        category: "Computers",
        description: "Laptops for business, school and home.",
        image: "photo-1496181133206-80ce9b88a853"
    },

    {
        name: "Desktop Computers",
        category: "Computers",
        description: "Desktop PCs and all-in-one computers.",
        image: "photo-1587831990711-23ca6441447b"
    },

    {
        name: "Monitors",
        category: "Computers",
        description: "Computer monitors and displays.",
        image: "photo-1527443224154-c4a3942d3acf"
    },

    {
        name: "Keyboards and Mice",
        category: "Accessories",
        description: "Wired and wireless keyboards and mice.",
        image: "photo-1587829741301-dc798b83add3"
    },

    {
        name: "Chargers and Adapters",
        category: "Accessories",
        description: "Phone chargers, laptop chargers and adapters.",
        image: "photo-1583863788434-e58a36330cf0"
    },

    {
        name: "USB and HDMI Cables",
        category: "Accessories",
        description: "USB, HDMI, Type-C and other cables.",
        image: "photo-1558618666-fcd25c85cd64"
    },

    {
        name: "Power Banks",
        category: "Accessories",
        description: "Portable charging devices.",
        image: "photo-1609091839311-d5365f9ff1c5"
    },

    {
        name: "Headphones and Earphones",
        category: "Accessories",
        description: "Bluetooth headphones and earphones.",
        image: "photo-1505740420928-5e560c06d30e"
    },

    {
        name: "Smart TVs",
        category: "Electronics",
        description: "Smart televisions and home entertainment.",
        image: "photo-1593359677879-a4bb92f829d1"
    },

    {
        name: "Printers and Scanners",
        category: "Electronics",
        description: "Printers, scanners, ink and toner.",
        image: "photo-1612815154858-60aa4c59eaa6"
    },

    {
        name: "Speakers",
        category: "Electronics",
        description: "Bluetooth and computer speakers.",
        image: "photo-1608043152269-423dbba4e7e1"
    },

    {
        name: "Routers and Wi-Fi",
        category: "Networking",
        description: "Routers and wireless connectivity devices.",
        image: "photo-1606904825846-647eb07f5be2"
    },

    {
        name: "Network Cables and Switches",
        category: "Networking",
        description: "Ethernet cables, switches and connectors.",
        image: "photo-1558494949-ef010cbdcc31"
    },

    {
        name: "Flash Drives and Storage",
        category: "Accessories",
        description: "Flash disks, memory cards, SSDs and hard drives.",
        image: "photo-1597872200969-2b65d56bd16b"
    },

    {
        name: "CCTV Cameras",
        category: "Electronics",
        description: "Security cameras and surveillance equipment.",
        image: "photo-1557597774-9d273605dfa9"
    },

    {
        name: "UPS and Power Protection",
        category: "Electronics",
        description: "UPS units and surge protectors.",
        image: "photo-1621905251189-08b45d6a269e"
    }

];


// DISPLAY PRODUCTS

const productGrid = document.getElementById("productGrid");

const searchInput = document.getElementById("productSearch");

let selectedCategory = "All";


function displayProducts() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredProducts = products.filter(product => {

        const categoryMatch =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const searchMatch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);

        return categoryMatch && searchMatch;

    });


    if (filteredProducts.length === 0) {

        productGrid.innerHTML =
            "<p class='empty'>No products found. Contact us for assistance.</p>";

        return;

    }


    productGrid.innerHTML = filteredProducts.map(product => `

        <div class="product-card">

            <img
                src="https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=700&q=80"
                alt="${product.name}"
                loading="lazy"
                onerror="this.onerror=null;this.src='https://placehold.co/700x500/eef5ff/1264d8?text=JB+Tech+Product';"
            >

            <div class="product-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="product-bottom">

                    <span>Price on enquiry</span>

                    <a
                        href="https://wa.me/254742447454?text=${encodeURIComponent("Hello JB Tech, I am interested in " + product.name + ". Please share availability and pricing.")}"
                        target="_blank"
                        rel="noopener"
                    >
                        Enquire →
                    </a>

                </div>

            </div>

        </div>

    `).join("");

}


// CATEGORY FILTERS

document.getElementById("categoryFilters").addEventListener("click", function(event) {

    const button = event.target.closest("button[data-category]");

    if (!button) return;

    selectedCategory = button.dataset.category;

    document.querySelectorAll(".filters button").forEach(btn => {

        btn.classList.remove("active");

    });

    button.classList.add("active");

    displayProducts();

});


// CATEGORY SHORTCUTS

document.querySelectorAll("[data-category-link]").forEach(link => {

    link.addEventListener("click", function() {

        selectedCategory = this.dataset.categoryLink;

        document.querySelectorAll(".filters button").forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === selectedCategory
            );

        });

        displayProducts();

    });

});


// PRODUCT SEARCH

searchInput.addEventListener("input", displayProducts);


// WHATSAPP ENQUIRY FORM

document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const customerName =
        document.getElementById("customerName").value.trim();

    const customerMessage =
        document.getElementById("customerMessage").value.trim();

    const message =
        `Hello JB Tech Supplies and Solutions. My name is ${customerName}. ${customerMessage}`;

    const whatsappURL =
        "https://wa.me/254742447454?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener");

});


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("open");

});

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("open");

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// LOAD PRODUCTS

displayProducts();