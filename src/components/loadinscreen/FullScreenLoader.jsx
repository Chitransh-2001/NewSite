export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-50">
      <div className="loader" />
      <style jsx>{`
        .loader {
          border: 5px solid #eee;
          border-top: 5px solid #333;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
