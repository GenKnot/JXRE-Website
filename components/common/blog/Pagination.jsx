import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const Pagination = ({ currentPage = 1, totalPages = 1 }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // If only 1 page, don't show pagination
    if (totalPages <= 1) return null;

    const handlePageClick = (page) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page);
        router.push(`/listing?${params.toString()}`);
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        // Always show first page
        pages.push(1);

        // Calculate start and end page numbers
        let startPage = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages - 1, startPage + maxPagesToShow - 3);

        // Adjust if we're near the end
        if (endPage <= startPage) {
            endPage = Math.min(totalPages - 1, currentPage + 1);
            startPage = Math.max(2, endPage - 2);
        }

        // Add ellipsis after first page if needed
        if (startPage > 2) {
            pages.push("...");
        }

        // Add page numbers in the middle
        for (let i = startPage; i <= endPage; i++) {
            if (i > 1 && i < totalPages) {
                pages.push(i);
            }
        }

        // Add ellipsis before last page if needed
        if (endPage < totalPages - 1) {
            pages.push("...");
        }

        // Always show last page if different from first
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <ul className="page_navigation">
            <li className={`page-item ${currentPage <= 1 ? 'disabled' : ''}`}>
                <a
                    className="page-link"
                    onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
                    style={{ cursor: currentPage > 1 ? 'pointer' : 'default' }}
                >
                    <span className="flaticon-left-arrow"></span>
                </a>
            </li>

            {pageNumbers.map((page, index) => (
                <li
                    key={index}
                    className={`page-item ${page === currentPage ? 'active' : ''} ${page === '...' ? 'disabled' : ''}`}
                >
                    <a
                        className="page-link"
                        onClick={() => page !== '...' && handlePageClick(page)}
                        style={{ cursor: page !== '...' ? 'pointer' : 'default' }}
                    >
                        {page}
                        {page === currentPage && <span className="sr-only">(current)</span>}
                    </a>
                </li>
            ))}

            <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
                <a
                    className="page-link"
                    onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
                    style={{ cursor: currentPage < totalPages ? 'pointer' : 'default' }}
                >
                    <span className="flaticon-right-arrow"></span>
                </a>
            </li>
        </ul>
    );
};

export default Pagination;