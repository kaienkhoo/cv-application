function Cta({ isEditing, setIsEditing }) {
    return (
        <section className="cta-section">
            <div className="cta">
                {isEditing ? (
                    <button type="submit">Submit</button>
                ) : (
                    <button type="button" onClick={() => setIsEditing(true)}>Edit</button>
                )}
            </div>
        </section>
    )
}

export default Cta