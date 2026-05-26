// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
    // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
    if (!document.body.classList.contains("no-layout")) {
        // Inserting your header and footer:
        document.body.insertAdjacentHTML("afterbegin", headerEl);
        document.body.insertAdjacentHTML("beforeend", footerEl);

        // Inserting sidebars:
        const wrapperElement = document.querySelector("main"); // you might have to change this selector to something like .my-wrapper
        if (wrapperElement) {
            wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
            wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
        }

        initActiveLinks();
    }

    // add your own javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
    // This function adds the class "active" to any link that links to the current page.
    // This is helpful for styling the active menu item.

    const pathname = window.location.pathname;
    [...document.querySelectorAll("a")].forEach((el) => {
        const elHref = el
            .getAttribute("href")
            .replace(".html", "")
            .replace("/public", "");

        if (pathname === "/") {
            // homepage
            if (elHref === "/" || elHref === "/index.html") el.classList.add("active");
        } else {
            // other pages
            if (window.location.href.includes(elHref)) el.classList.add("active");
        }
    });
}

function getNestingString() {
    // This function prepares the "nesting" variable for your header and footer (see below).
    // Only change this function if you know what you're doing.
    const currentUrl = window.location.href
        .replace("http://", "")
        .replace("https://", "")
        .replace("/public/", "/");
    const numberOfSlahes = currentUrl.split("/").length - 1;
    if (numberOfSlahes === 1) return ".";
    if (numberOfSlahes === 2) return "..";
    return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
 Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
 Example:
 <img src="${nesting}/images/example.jpg" />
 will output
 <img src="./images/example.jpg" /> on a page that isn't in any folder.
 <img src="../images/example.jpg" /> on a page that is in a folder.
 <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
 etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerEl = `
	<header>
		Header. Example of how to use the 'active' class to style active links (here: bold):
		<nav>
			<a href="index.html">homepage</a>
			<a href="About.html">this page</a>
			<a href="Gallery.html">other page</a>
			<a href="index.html">other page 2</a>
			<a class ="last" href="/coding/layout-base-code">other page</a>
		</nav>
	</header>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl = `
	<footer>
		Footer. Example of how to add an image: 
		<img src="${nesting}/assets/img/layout/divider1.gif" alt="" aria-hidden="true"/>
	</footer>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl1 = `
	<aside>
	    <div class="sidebar-image">
            <div class="inner">
                <img src="https://pbs.twimg.com/profile_images/1574807955526008832/HtmVv8eH_400x400.jpg" alt="could not load">
            </div>
        </div>
		<img src="https://raining-starss.neocities.org/gittyimages%20(1).gif" alt="could not load">
        <img src="https://pixelsafari.neocities.org/stamps/ilovestamps.gif"  alt="could not load">
        <img src="https://pixelsafari.neocities.org/stamps/more/sweets.gif"  alt="could not load">
        <img src="https://pixelsafari.neocities.org/stamps/more/candycorn.png"  alt="could not load">
        <img src="https://y2k.neocities.org/stamps/made_in_the___90s_by_mr_stamp.gif"  alt="could not load">
        <img src="https://y2k.neocities.org/stamps2/_stamp__alfred__hunter_of_vilebloods_by_cute_quts-da7znz9.png" alt ="could not load">
        <img src="https://y2k.neocities.org/stamps/tumblr_pbyzqd09lD1xzybrpo5_250.gif" alt = "could not load">
        <img src="https://raining-starss.neocities.org/garfpenis%20(8).gif"  alt="could not load">
        <img src="https://raining-starss.neocities.org/twiddle%20(4).gif"  alt="could not load">
        <img src="https://raining-starss.neocities.org/blinkiefyle%20(14).gif"  alt="could not load">
        <a target="_blank" href="https://amherrington.nfshost.com/">
            <img src="https://images.squidge.org/images/2025/02/17/herrington_banner.jpeg"  alt="could not load">
        </a>
	</aside>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl2 = `
	<aside>
		Sidebar2
	</aside>
`;