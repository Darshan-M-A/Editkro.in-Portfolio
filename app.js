const heroSlides = [
    {
        id: 1,
        title: "Launch Campaign for Boosted Rev",
        category: "eCommerce Ads",
        description: "Dynamic product launch campaign for electric scooter featuring cinematic shots and smooth transitions",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=800&fit=crop",
        cta: "View Campaign",
        stats: "2M+ Views • 150% Conversion Increase"
    },
    {
        id: 2,
        title: "Epic Gaming Tournament Highlights",
        category: "Gaming Videos", 
        description: "High-energy esports compilation with custom graphics, slow-motion replays, and beat-synced editing",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=800&fit=crop",
        cta: "Watch Highlights",
        stats: "5M+ Views • 300% Engagement Boost"
    },
    {
        id: 3,
        title: "Cinematic Brand Documentary",
        category: "Documentary Style",
        description: "Award-winning brand story documentary showcasing 50 years of craftsmanship with professional interviews",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop",
        cta: "View Documentary",
        stats: "Film Festival Winner • 1M+ Views"
    },
    {
        id: 4,
        title: "Viral Social Media Campaign",
        category: "Short-form Videos",
        description: "TikTok and Instagram Reels series that went viral with trending audio and visual effects",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
        cta: "See Campaign",
        stats: "10M+ Views • Trending #1"
    },
    {
        id: 5,
        title: "Professional Color Grading Showcase", 
        category: "Color Grading",
        description: "Before and after color grading demonstration showing cinematic look development techniques",
        image: "https://images.unsplash.com/photo-1478720568477-b0829c2b9087?w=1200&h=800&fit=crop",
        cta: "View Showcase",
        stats: "Industry Recognition • 500K+ Views"
    }
];

const portfolioData = [
    {
        id: 1,
        title: "Viral TikTok Fashion Campaign",
        category: "short-form",
        description: "Created a series of engaging TikTok videos for a fashion brand that went viral, reaching 2M+ views",
        thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
        tags: ["TikTok", "Fashion", "Viral", "Trending"],
        details: "A comprehensive social media campaign that leveraged trending audio and visual effects to create viral content. The campaign included 15 unique videos across different fashion categories, each optimized for maximum engagement on TikTok's algorithm."
    },
    {
        id: 2,
        title: "Restaurant Instagram Reels Series",
        category: "short-form",
        description: "Food photography and recipe reels that increased restaurant's social media engagement by 300%",
        thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
        tags: ["Instagram", "Food", "Reels", "Social Media"],
        details: "A month-long content series featuring behind-the-scenes kitchen footage, recipe tutorials, and customer testimonials. The project included advanced color grading to make the food look irresistible and strategic posting schedules to maximize reach."
    },
    {
        id: 3,
        title: "Tech Startup Documentary",
        category: "long-form",
        description: "15-minute corporate documentary showcasing the journey and vision of a leading tech startup",
        thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
        tags: ["Corporate", "Documentary", "Startup", "Business"],
        details: "An in-depth documentary following the startup's journey from inception to IPO. Featured interviews with founders, employees, and investors, along with cinematic B-roll footage of their offices and product development process."
    },
    {
        id: 4,
        title: "Educational YouTube Series",
        category: "long-form",
        description: "Professional editing for a 10-episode educational series on digital marketing fundamentals",
        thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
        tags: ["YouTube", "Education", "Tutorial", "Series"],
        details: "A comprehensive educational series with custom motion graphics, animated explanations, and professional audio mixing. Each episode featured interactive elements and consistent branding throughout the series."
    },
    {
        id: 5,
        title: "Esports Tournament Highlights",
        category: "gaming",
        description: "High-energy highlight reel from major esports tournament with custom graphics and effects",
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        tags: ["Esports", "Gaming", "Tournament", "Highlights"],
        details: "A dynamic highlight reel featuring the most exciting moments from a 3-day tournament. Included custom team graphics, player statistics overlays, and synchronized audio with crowd reactions for maximum impact."
    },
    {
        id: 6,
        title: "Gaming Streamer Compilation",
        category: "gaming",
        description: "Best moments compilation for popular gaming streamer with dynamic transitions and effects",
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
        tags: ["Streaming", "Compilation", "Gaming", "Entertainment"],
        details: "A monthly compilation video showcasing the funniest and most impressive moments from live streams. Featured creative transitions, animated text overlays, and perfectly timed music synchronization."
    },
    {
        id: 7,
        title: "IPL Match Highlights",
        category: "football",
        description: "Cricket match highlights with slow-motion replays and dynamic graphics for IPL coverage",
        thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop",
        tags: ["Cricket", "IPL", "Sports", "Highlights"],
        details: "High-energy cricket highlights featuring the best moments from IPL matches with cinematic slow-motion replays and dynamic graphics overlays."
    },
    {
        id: 8,
        title: "Football Skills Montage",
        category: "football",
        description: "Epic football skills compilation with beat-synced editing and cinematic slow-motion effects",
        thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop",
        tags: ["Football", "Skills", "Sports", "Montage"],
        details: "A compilation of the most impressive football skills and goals with perfectly synced music and dramatic slow-motion sequences."
    },
    {
        id: 9,
        title: "Electronics Product Launch",
        category: "ecommerce",
        description: "Sleek product demo video for smartphone launch, showcasing features and benefits",
        thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
        tags: ["Product", "Launch", "Electronics", "Demo"],
        details: "A premium product launch video featuring sleek cinematography and detailed feature demonstrations that drove pre-order sales."
    },
    {
        id: 10,
        title: "Amazon Product Demo Series",
        category: "ecommerce",
        description: "Series of product demonstration videos for Amazon listings, increasing conversion rates by 150%",
        thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        tags: ["Amazon", "Product Demo", "E-commerce", "Conversion"],
        details: "A comprehensive series of product videos optimized for e-commerce platforms with clear demonstrations and compelling calls-to-action."
    },
    {
        id: 11,
        title: "Brand Story Documentary",
        category: "documentary",
        description: "Compelling brand story documentary for heritage jewelry brand, exploring 50 years of craftsmanship",
        thumbnail: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
        tags: ["Brand Story", "Heritage", "Documentary", "Craftsmanship"],
        details: "An emotional documentary showcasing the heritage and craftsmanship of a family jewelry business spanning three generations."
    },
    {
        id: 12,
        title: "Founder Interview Series",
        category: "documentary",
        description: "Intimate interview series with successful entrepreneurs sharing their journey and insights",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
        tags: ["Interview", "Entrepreneur", "Business", "Insights"],
        details: "A series of in-depth interviews with successful entrepreneurs, featuring professional lighting and compelling storytelling techniques."
    },
    {
        id: 13,
        title: "Cinematic Color Grading Showcase",
        category: "color-grading",
        description: "Before and after color grading showcase demonstrating cinematic look development",
        thumbnail: "https://images.unsplash.com/photo-1478720568477-b0829c2b9087?w=400&h=300&fit=crop",
        tags: ["Color Grading", "Cinematic", "Post-production", "Visual"],
        details: "A showcase of our color grading expertise featuring before and after comparisons of various cinematic looks and styles."
    },
    {
        id: 14,
        title: "Film Color Correction Portfolio",
        category: "color-grading",
        description: "Professional color correction work for independent films and commercial projects",
        thumbnail: "https://images.unsplash.com/photo-1489599242091-351c92c6654e?w=400&h=300&fit=crop",
        tags: ["Film", "Color Correction", "Cinema", "Professional"],
        details: "Professional color correction services for independent filmmakers and commercial projects with industry-standard workflows."
    },
    {
        id: 15,
        title: "Animated Brand Explainer",
        category: "anime",
        description: "Animated explainer video for SaaS company using custom illustrations and motion graphics",
        thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        tags: ["Animation", "Explainer", "SaaS", "Motion Graphics"],
        details: "A custom animated explainer video featuring original character design and smooth motion graphics to explain complex software concepts."
    },
    {
        id: 16,
        title: "Anime-Style Brand Intro",
        category: "anime",
        description: "Dynamic anime-inspired brand introduction with custom character design and animation",
        thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        tags: ["Anime", "Brand Intro", "Character Design", "Animation"],
        details: "A dynamic anime-style brand introduction featuring custom character design and fluid animation sequences."
    },
    {
        id: 17,
        title: "Banking App TV Commercial",
        category: "advertisement",
        description: "30-second TV commercial for digital banking app, aired during prime time slots",
        thumbnail: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=300&fit=crop",
        tags: ["TV Commercial", "Banking", "Finance", "Advertising"],
        details: "A high-budget TV commercial for a digital banking app featuring professional actors and premium production values."
    },
    {
        id: 18,
        title: "Digital Brand Campaign",
        category: "advertisement",
        description: "Multi-platform advertising campaign for lifestyle brand with consistent visual identity",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        tags: ["Digital Campaign", "Lifestyle", "Branding", "Multi-platform"],
        details: "A comprehensive digital advertising campaign across multiple platforms with consistent branding and messaging."
    }
];


let currentSlide = 0;
let isAutoPlaying = true;
let autoPlayInterval;
let currentModalItem = 0;
let filteredPortfolioData = [...portfolioData];
let isTransitioning = false;
let touchStartX = 0;
let touchStartY = 0;


let hamburger, navMenu, portfolioGrid, filterButtons, modal, modalOverlay, modalClose, modalBody, modalPrev, modalNext, contactForm, navbar;
let carouselSlides, carouselPrev, carouselNext, carouselIndicators, carouselProgressBar;


document.addEventListener('DOMContentLoaded', function() {

    initializeDOMElements();
    initializeCarousel();
    populatePortfolio();
    initializeEventListeners();
    initializeScrollAnimations();
    initializeTouchSupport();
    preloadImages();
    initializeCounters();
});

function initializeDOMElements() {
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    portfolioGrid = document.getElementById('portfolio-grid');
    filterButtons = document.querySelectorAll('.filter-btn');
    modal = document.getElementById('portfolio-modal');
    modalOverlay = document.getElementById('modal-overlay');
    modalClose = document.getElementById('modal-close');
    modalBody = document.getElementById('modal-body');
    modalPrev = document.getElementById('modal-prev');
    modalNext = document.getElementById('modal-next');
    contactForm = document.getElementById('contact-form');
    navbar = document.getElementById('navbar');
    

    carouselSlides = document.getElementById('carousel-slides');
    carouselPrev = document.getElementById('carousel-prev');
    carouselNext = document.getElementById('carousel-next');
    carouselIndicators = document.getElementById('carousel-indicators');
    carouselProgressBar = document.getElementById('carousel-progress-bar');
}

function initializeCarousel() {
    if (!carouselSlides) return;
    
   
    carouselSlides.innerHTML = '';
    carouselIndicators.innerHTML = '';
    
    
    heroSlides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.classList.add('carousel-slide');
        if (index === 0) slideElement.classList.add('active');
        
        slideElement.style.backgroundImage = `url(${slide.image})`;
        slideElement.innerHTML = `
            <div class="carousel-overlay"></div>
            <div class="carousel-content">
                <span class="carousel-category">${slide.category}</span>
                <h1>${slide.title}</h1>
                <p>${slide.description}</p>
                <div class="carousel-stats" style="margin-bottom: 20px; color: rgba(255, 255, 255, 0.8); font-size: 14px; font-weight: 500;">${slide.stats}</div>
                <a href="#portfolio" class="carousel-cta" data-slide-id="${slide.id}">${slide.cta}</a>
            </div>
        `;
        
        carouselSlides.appendChild(slideElement);
    });

    
    heroSlides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.dataset.slide = index;
        indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
        carouselIndicators.appendChild(indicator);
    });

    
    document.querySelectorAll('.carousel-indicator').forEach(indicator => {
        indicator.addEventListener('click', function() {
            const slideIndex = parseInt(this.dataset.slide);
            goToSlide(slideIndex);
        });
    });

    
    startAutoPlay();
}


function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!slides.length) return;
    
    
    slides[currentSlide].classList.add('exiting');
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    
    currentSlide = (currentSlide + 1) % heroSlides.length;
    
    
    setTimeout(() => {
        slides[currentSlide].classList.add('entering', 'active');
        indicators[currentSlide].classList.add('active');
    }, 100);
    
    
    setTimeout(() => {
        slides.forEach(slide => {
            slide.classList.remove('exiting', 'entering');
        });
        isTransitioning = false;
    }, 1200);
}

function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!slides.length) return;
    
    
    slides[currentSlide].classList.add('exiting');
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    
    
    setTimeout(() => {
        slides[currentSlide].classList.add('entering', 'active');
        indicators[currentSlide].classList.add('active');
    }, 100);
    
    
    setTimeout(() => {
        slides.forEach(slide => {
            slide.classList.remove('exiting', 'entering');
        });
        isTransitioning = false;
    }, 1200);
}

function goToSlide(index) {
    if (index === currentSlide || isTransitioning || index < 0 || index >= heroSlides.length) return;
    
    isTransitioning = true;
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (!slides.length) return;
    
    
    slides[currentSlide].classList.add('exiting');
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    
    setTimeout(() => {
        slides[currentSlide].classList.add('entering', 'active');
        indicators[currentSlide].classList.add('active');
    }, 150);
    
    
    setTimeout(() => {
        slides.forEach(slide => {
            slide.classList.remove('exiting', 'entering');
        });
        isTransitioning = false;
    }, 1200);
    
    resetAutoPlay();
}


function startAutoPlay() {
    if (!isAutoPlaying) return;
    
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 6000);
    
    updateProgressBar();
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        if (carouselProgressBar) {
            carouselProgressBar.style.transition = 'none';
            carouselProgressBar.style.width = '0%';
        }
    }
}

function resetAutoPlay() {
    stopAutoPlay();
    if (isAutoPlaying) {
        setTimeout(() => startAutoPlay(), 100);
    }
}

function updateProgressBar() {
    if (!carouselProgressBar) return;
    
    carouselProgressBar.style.transition = 'none';
    carouselProgressBar.style.width = '0%';
    
    
    carouselProgressBar.offsetWidth;
    
    carouselProgressBar.style.transition = 'width 6s linear';
    carouselProgressBar.style.width = '100%';
}

function initializeTouchSupport() {
    const carousel = document.querySelector('.hero-carousel');
    if (!carousel) return;

    carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: false });

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        e.preventDefault();
    }

    function handleTouchEnd(e) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
            resetAutoPlay();
        }
    }
}

function initializeEventListeners() {

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            
            if (navMenu.classList.contains('active')) {
                const navLinks = navMenu.querySelectorAll('.nav-link');
                navLinks.forEach((link, index) => {
                    link.style.animationDelay = `${0.1 * (index + 1)}s`;
                });
            }
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) hamburger.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
        });
    });

    
    if (carouselPrev) {
        carouselPrev.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            resetAutoPlay();
        });
    }

    if (carouselNext) {
        carouselNext.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            resetAutoPlay();
        });
    }

    
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        heroCarousel.addEventListener('mouseenter', () => {
            isAutoPlaying = false;
            stopAutoPlay();
        });

        heroCarousel.addEventListener('mouseleave', () => {
            isAutoPlaying = true;
            startAutoPlay();
        });
    }

    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('active')) return;
            
            const filter = this.dataset.filter;
            
            
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.transform = 'scale(0.95)';
            });
            
            setTimeout(() => {
                this.classList.add('active');
                filterButtons.forEach(btn => {
                    btn.style.transform = 'scale(1)';
                });
            }, 100);
            
            
            filterPortfolioEnhanced(filter);
        });
    });

    
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalPrev) modalPrev.addEventListener('click', showPrevProject);
    if (modalNext) modalNext.addEventListener('click', showNextProject);
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            closeModal();
        }
        
        if (modal && !modal.classList.contains('hidden')) {
            if (e.key === 'ArrowLeft') showPrevProject();
            if (e.key === 'ArrowRight') showNextProject();
            return;
        }
        
        
        if (document.activeElement.tagName !== 'INPUT' && 
            document.activeElement.tagName !== 'TEXTAREA' && 
            document.activeElement.tagName !== 'SELECT') {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoPlay();
            }
        }
    });


    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    
    document.addEventListener('click', function(e) {
        
        if (e.target.classList.contains('carousel-cta')) {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        
        
        if (e.target.classList.contains('nav-link') || e.target.closest('a[href^="#"]')) {
            const link = e.target.classList.contains('nav-link') ? e.target : e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });

    
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', throttle(function() {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 50) {
                navbar.style.background = 'rgba(26, 26, 46, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(26, 26, 46, 0.95)';
                navbar.style.boxShadow = 'none';
            }
            
        
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = currentScrollY;
    }, 16));

    
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            stopAutoPlay();
        } else if (isAutoPlaying) {
            startAutoPlay();
        }
    });
}

function populatePortfolio() {
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    portfolioData.forEach((item, index) => {
        const portfolioItem = createPortfolioItem(item);
        portfolioItem.style.animationDelay = `${index * 0.05}s`;
        portfolioGrid.appendChild(portfolioItem);
    });
}


function createPortfolioItem(item) {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item', 'fade-scale');
    portfolioItem.dataset.category = item.category;
    portfolioItem.dataset.id = item.id;
    
    portfolioItem.innerHTML = `
        <div class="portfolio-thumbnail">
            <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
            <div class="portfolio-overlay">
                <div class="play-icon">▶</div>
            </div>
        </div>
        <div class="portfolio-content">
            <span class="portfolio-category">${getCategoryName(item.category)}</span>
            <h3 class="portfolio-title">${item.title}</h3>
            <p class="portfolio-description">${item.description}</p>
        </div>
    `;
    
    
    portfolioItem.addEventListener('click', () => {
        portfolioItem.style.transform = 'scale(0.95)';
        setTimeout(() => {
            openModal(item);
            portfolioItem.style.transform = '';
        }, 150);
    });
    
    return portfolioItem;
}

function getCategoryName(category) {
    const categoryMap = {
        'short-form': 'Short-form Videos',
        'long-form': 'Long-form Videos',
        'gaming': 'Gaming Videos',
        'football': 'Sports Videos',
        'ecommerce': 'eCommerce Ads',
        'documentary': 'Documentary Style',
        'color-grading': 'Color Grading',
        'anime': 'Animation Videos',
        'advertisement': 'Advertisement Videos'
    };
    return categoryMap[category] || category;
}

function filterPortfolioEnhanced(filter) {
    const items = document.querySelectorAll('.portfolio-item');
    
    if (!items.length) return;
    
    
    if (filter === 'all') {
        filteredPortfolioData = [...portfolioData];
    } else {
        filteredPortfolioData = portfolioData.filter(item => item.category === filter);
    }
    

    items.forEach((item, index) => {
        if (!item.classList.contains('hidden')) {
            setTimeout(() => {
                item.classList.add('slide-out-left');
            }, index * 30);
        }
    });
    
    setTimeout(() => {
        let visibleIndex = 0;
        
        items.forEach(item => {
            item.classList.remove('slide-out-left');
            
            if (filter === 'all' || item.dataset.category === filter) {
                item.classList.remove('hidden');
                item.style.display = 'block';
                
                
                setTimeout(() => {
                    item.classList.add('slide-in-right');
                }, visibleIndex * 50);
                
                visibleIndex++;
            } else {
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });
        
        
        setTimeout(() => {
            items.forEach(item => {
                item.classList.remove('slide-in-right');
            });
        }, 1200);
    }, 800);
}


function openModal(item) {
    if (!modal || !modalBody) return;
    
    currentModalItem = filteredPortfolioData.findIndex(p => p.id === item.id);
    
    modalBody.innerHTML = `
        <div class="modal-portfolio-item" style="animation: slideUpScale 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;">
            <img src="${item.thumbnail}" alt="${item.title}" 
                 style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
            <span class="portfolio-category" style="margin-bottom: 16px; display: inline-block;">${getCategoryName(item.category)}</span>
            <h2 style="margin: 16px 0; color: var(--color-text); font-size: 28px; font-weight: 600;">${item.title}</h2>
            <p style="color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 24px; font-size: 18px;">${item.description}</p>
            <div style="color: rgba(255, 255, 255, 0.8); line-height: 1.7; margin-bottom: 24px; font-size: 16px;">${item.details || item.description}</div>
            <div class="portfolio-tags" style="display: flex; flex-wrap: wrap; gap: 12px;">
                ${item.tags.map(tag => `<span style="background: rgba(243, 156, 18, 0.2); color: var(--accent-gold); padding: 8px 16px; border-radius: 24px; font-size: 14px; font-weight: 500; border: 1px solid rgba(243, 156, 18, 0.3);">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    
    if (modalPrev) modalPrev.disabled = currentModalItem === 0;
    if (modalNext) modalNext.disabled = currentModalItem === filteredPortfolioData.length - 1;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;
    
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function showPrevProject() {
    if (currentModalItem > 0) {
        const prevItem = filteredPortfolioData[currentModalItem - 1];
        openModal(prevItem);
    }
}

function showNextProject() {
    if (currentModalItem < filteredPortfolioData.length - 1) {
        const nextItem = filteredPortfolioData[currentModalItem + 1];
        openModal(nextItem);
    }
}


function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (!submitButton) return;
    
    const originalText = submitButton.textContent;
    
    
    submitButton.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.3); border-top: 2px solid white; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <span>Sending Message...</span>
        </div>
    `;
    submitButton.disabled = true;
    

    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
    `;
    document.head.appendChild(style);
    
    setTimeout(() => {
        
        submitButton.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px; animation: pulse 0.5s ease;">
                <span style="color: #4CAF50;">✓</span>
                <span>Message Sent Successfully!</span>
            </div>
        `;
        
        setTimeout(() => {
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            document.head.removeChild(style);
        }, 2000);
    }, 2000);
}

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                
                if (entry.target.classList.contains('stagger-children')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('animate');
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    
    const animatedElements = document.querySelectorAll('.slide-up, .slide-in-left, .slide-in-right, .fade-scale, .service-card, .stat-item, .contact-form .form-group, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
    
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));
}


function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.textContent);
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
                    }
                }, 16);
                
                observer.unobserve(counter);
            }
        });
    });
    
    counters.forEach(counter => observer.observe(counter));
}


function preloadImages() {
    const imagesToPreload = [
        ...heroSlides.map(slide => slide.image),
        ...portfolioData.slice(0, 6).map(item => item.thumbnail)
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}


function createScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = `
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
        </svg>
    `;
    
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: linear-gradient(45deg, #f39c12, #e74c3c);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transform: scale(0.8);
        transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        z-index: 1000;
        box-shadow: 0 4px 20px rgba(243, 156, 18, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(scrollButton);
    
    
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 500) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
            scrollButton.style.transform = 'scale(1)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
            scrollButton.style.transform = 'scale(0.8)';
        }
    }, 100));
    
    scrollButton.addEventListener('click', () => {
        scrollButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            scrollButton.style.transform = 'scale(1)';
        }, 150);
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('mouseenter', () => {
        scrollButton.style.transform = 'scale(1.1)';
        scrollButton.style.boxShadow = '0 6px 25px rgba(243, 156, 18, 0.4)';
    });

    scrollButton.addEventListener('mouseleave', () => {
        scrollButton.style.transform = 'scale(1)';
        scrollButton.style.boxShadow = '0 4px 20px rgba(243, 156, 18, 0.3)';
    });
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.addEventListener('DOMContentLoaded', function() {
    createScrollToTop();
    
    const buttons = document.querySelectorAll('.btn, .filter-btn, .carousel-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0) scale(0.98)';
            }
        });
        
        button.addEventListener('mouseup', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px) scale(1.02)';
            }
        });
    });
});