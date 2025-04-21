const NavLink = ({ href, children, onClick }) => {
    return (
        <a
            href={href}
            onClick={(e) => {
                e.preventDefault(); 
                if (onClick) onClick(); 
            }}
            style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1rem",
                opacity: 0.7,
                transition: "opacity 0.3s ease",
                whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 1)}
            onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
        >
            {children}
        </a>
    );
};

export default NavLink;