const data = {
    "Doğum Tarihi": "24.03.1996",
    "İkamet Şehri": "Ankara",
    "Eğitim Durumu": ["Hacettepe Ünv. Biyoloji", "Lisans, 2016"],
    "Tercih ettiği Rol": "Frontend UI",
};

const BasicInfo = () => {
    return (
        <div className="space-y-3">
            {Object.entries(data).map(([label, value]) => (
                <div key={label} className="flex gap-4">
                    <p className="text-hero-lime text-2xl w-50">{label}</p>
                    <p className="text-2xl text-gray-200">
                        {Array.isArray(value) ? value.map((line, i) =>
                            (<span key={i}>{line}<br /></span>)) : value}
                    </p>
                </div>
            ))}
        </div>
    );
};
export default BasicInfo