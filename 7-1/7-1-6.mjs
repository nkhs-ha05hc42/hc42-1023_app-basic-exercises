const hyaku = (count) => {
    if (count > 100) return // ここが処理の肝となる終了条件
    hyaku(count * 2)
    console.log(count)
   }
   hyaku(10)
   console.log("")
   hyaku(25)