import AnimateOnView from "../ui/AnimateOnView";

export default function AnimationDemo() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Animation Demo</h1>

        {/* Slide up examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Slide Up Animations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <AnimateOnView
                key={item}
                className="bg-blue-600 p-6 rounded-lg text-center"
                animationType="slide-up"
                delay={0.1 * item}
              >
                <h3 className="text-xl font-bold mb-2">Card {item}</h3>
                <p>This card slides up when it comes into view</p>
              </AnimateOnView>
            ))}
          </div>
        </div>

        {/* Different animation types */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Different Animation Types
          </h2>

          <div className="space-y-6">
            <AnimateOnView
              className="bg-green-600 p-6 rounded-lg"
              animationType="slide-left"
            >
              <h3 className="text-xl font-bold mb-2">Slide Left</h3>
              <p>This element slides in from the left</p>
            </AnimateOnView>

            <AnimateOnView
              className="bg-purple-600 p-6 rounded-lg"
              animationType="slide-right"
              delay={0.2}
            >
              <h3 className="text-xl font-bold mb-2">Slide Right</h3>
              <p>This element slides in from the right</p>
            </AnimateOnView>

            <AnimateOnView
              className="bg-yellow-600 p-6 rounded-lg"
              animationType="scale"
              delay={0.4}
            >
              <h3 className="text-xl font-bold mb-2">Scale Animation</h3>
              <p>This element scales up when it comes into view</p>
            </AnimateOnView>
          </div>
        </div>

        {/* Fade in example */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Fade In Animation</h2>

          <AnimateOnView
            className="bg-red-600 p-6 rounded-lg text-center"
            animationType="fade"
          >
            <h3 className="text-xl font-bold mb-2">Fade In</h3>
            <p>This element fades in when it comes into view</p>
          </AnimateOnView>
        </div>
      </div>
    </div>
  );
}
