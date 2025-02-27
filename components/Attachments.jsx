const Attachments = ({ attachments }) => {
    if (!attachments || attachments.length === 0) return null;

    const getFileIcon = (fileType) => {
        switch(fileType) {
            case 'pdf':
                return "flaticon-pdf";
            case 'doc':
            case 'docx':
                return "flaticon-document";
            case 'xls':
            case 'xlsx':
                return "flaticon-file";
            default:
                return "flaticon-file";
        }
    };

    return (
        <>
            {attachments.map((attachment) => (
                <div className="icon_box_area style2" key={attachment.id}>
                    <div className="score">
                        <span className={`${getFileIcon(attachment.file_type)} text-thm fz30`}></span>
                    </div>
                    <div className="details">
                        <h5>
                            <a href={attachment.file_url} target="_blank" rel="noopener noreferrer">
                                <span className="flaticon-download text-thm pr10"></span>
                                {attachment.title}
                            </a>
                        </h5>
                        {attachment.description && <p>{attachment.description}</p>}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Attachments;