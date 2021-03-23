#!/bin/bash

file=inversioncounter.cpp
MAXTIME="8.0"

if [ ! -f "$file" ]; then
    echo -e "Error: File '$file' not found.\nTest failed."
    exit 1
fi

num_right=0
total=0
line="________________________________________________________________________"
compiler=
interpreter=
language=
extension=${file##*.}
if [ "$extension" = "py" ]; then
    if [ ! -z "$PYTHON_PATH" ]; then
        interpreter=$(which python.exe)
    else
        interpreter=$(which python3.2)
    fi
    command="$interpreter $file"
    echo -e "Testing $file\n"
elif [ "$extension" = "java" ]; then
    language="java"
    command="java ${file%.java}"
    echo -n "Compiling $file..."
    javac $file
    echo -e "done\n"
elif [ "$extension" = "c" ] || [ "$extension" = "cpp" ]; then
    language="c"
    command="./${file%.*}"
    echo -n "Compiling $file..."
    results=$(make 2>&1)
    if [ $? -ne 0 ]; then
        echo -e "\n$results"
        exit 1
    fi
    echo -e "done\n"
fi

timeout() {
    time=$1

    # start the command in a subshell to avoid problem with pipes
    # (spawn accepts one command)
    cmd="/bin/bash -c \"$2\""

    { expect -c "set echo \"-noecho\"; set timeout $time; spawn -noecho $cmd; expect timeout { exit 1 } eof { exit 0 }"; } >/dev/null

    if [ $? -eq 1 ]; then
        return 0
    fi
    return 1
}

run_test_args() {
    (( ++total ))
    echo -n "Running test $total..."
    expected=$3
    local ismac=0
    date --version >/dev/null 2>&1
    if [ $? -ne 0 ]; then
       ismac=1
    fi
    local start=0
    if (( ismac )); then
        start=$(python -c 'import time; print time.time()')
    else
        start=$(date +%s.%N)
    fi
(cat << ENDOFTEXT
$2
ENDOFTEXT
) > input.txt
    if timeout $MAXTIME "cat input.txt | $command $1 2>&1 | tr -d '\r' > tmp.txt"; then
        echo "failure [timed out after $MAXTIME seconds]"
    else
        received=$(cat tmp.txt)
        { cat input.txt | $command $1 2>&1 > /dev/null; } 1>/dev/null 2>error.txt
        error=$(cat error.txt)
        if [ ! -z "$error" ]; then
            received="${received}\n$error"
        fi
        local end=$(date +%s.%N)
        if (( ismac )); then
            end=$(python -c 'import time; print time.time()')
        else
            end=$(date +%s.%N)
        fi
        local elapsed=$(echo "scale=3; $end - $start" | bc | awk '{printf "%.3f", $0}') 
        if [ "$expected" != "$received" ]; then
            echo -e "failure\n\nExpected$line\n$expected\n"
            echo -e "Received$line\n$received\n"
        else
            echo "success [$elapsed seconds]"
            (( ++num_right ))
        fi
    fi
    rm -f tmp.txt input.txt
}


run_test_args "" "x 1 2 3" "Enter sequence of integers, each followed by a space: Error: Non-integer value 'x' received at index 0."
run_test_args "" "1 2 x 3" "Enter sequence of integers, each followed by a space: Error: Non-integer value 'x' received at index 2."
run_test_args "" "1 2 3 R" "Enter sequence of integers, each followed by a space: Error: Non-integer value 'R' received at index 3."
run_test_args "" "B 2 3 R" "Enter sequence of integers, each followed by a space: Error: Non-integer value 'B' received at index 0."
run_test_args "" "2 c 3 R" "Enter sequence of integers, each followed by a space: Error: Non-integer value 'c' received at index 1."
run_test_args "lots of args" "" "Usage: ./inversioncounter [slow]"
run_test_args "1 2 3 4" "" "Usage: ./inversioncounter [slow]"
run_test_args "fast slow" "" "Usage: ./inversioncounter [slow]"
run_test_args "average" "" "Error: Unrecognized option 'average'."
run_test_args "123" "" "Error: Unrecognized option '123'."
run_test_args "sloww" "" "Error: Unrecognized option 'sloww'."
run_test_args "FAST" "" "Error: Unrecognized option 'FAST'."
run_test_args "" "" "Enter sequence of integers, each followed by a space: Error: Sequence of integers not received."
run_test_args "" "  " "Enter sequence of integers, each followed by a space: Error: Sequence of integers not received."

# slow
run_test_args "slow" "2 1" "Enter sequence of integers, each followed by a space: Number of inversions: 1"
run_test_args "slow" "1" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "slow" "1 4 6 7 9 10" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "slow" "35 12 11 17 20" "Enter sequence of integers, each followed by a space: Number of inversions: 5"
run_test_args "slow" "20, 17, 12, 1, 3" "Enter sequence of integers, each followed by a space: Number of inversions: 9"
run_test_args "slow" "10, 9, 8, 7, 6, 5, 4, 3, 2, 1" "Enter sequence of integers, each followed by a space: Number of inversions: 45"
run_test_args "slow" "4, 4, 4, 4" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "slow" "23, 19, 23, 3, 19, 1" "Enter sequence of integers, each followed by a space: Number of inversions: 11"
run_test_args "slow" "20, -3, -9, 14, 3, -100" "Enter sequence of integers, each followed by a space: Number of inversions: 11"
run_test_args "slow" "5, 4, 3, 2, 1, 0, -1, -2, -3, -4, 5" "Enter sequence of integers, each followed by a space: Number of inversions: 45"
run_test_args "slow" "1, 5, -4, 57, -4, -57, -10000" "Enter sequence of integers, each followed by a space: Number of inversions: 16"
run_test_args "slow" "10003, 10200, 1000, 1120, 13, 49" "Enter sequence of integers, each followed by a space: Number of inversions: 12"
run_test_args "slow" "$(echo {10000..1})" "Enter sequence of integers, each followed by a space: Number of inversions: 49995000"
run_test_args "slow" "$(echo {1..10000})" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "slow" "$(echo {-1..-10000})" "Enter sequence of integers, each followed by a space: Number of inversions: 49995000"
run_test_args "slow" "$(echo {-10000..-1})" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "slow" "1001, 1456, 3440, 5690, 11" "Enter sequence of integers, each followed by a space: Number of inversions: 4"

MAXTIME="1.250"

# fast
run_test_args "" "2 1" "Enter sequence of integers, each followed by a space: Number of inversions: 1"
run_test_args "" "1" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "" "1 4 6 7 9 10" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "" "35 12 11 17 20" "Enter sequence of integers, each followed by a space: Number of inversions: 5"
run_test_args "" "20, 17, 12, 1, 3" "Enter sequence of integers, each followed by a space: Number of inversions: 9"
run_test_args "" "10, 9, 8, 7, 6, 5, 4, 3, 2, 1" "Enter sequence of integers, each followed by a space: Number of inversions: 45"
run_test_args "" "4, 4, 4, 4" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "" "23, 19, 23, 3, 19, 1" "Enter sequence of integers, each followed by a space: Number of inversions: 11"
run_test_args "" "20, -3, -9, 14, 3, -100" "Enter sequence of integers, each followed by a space: Number of inversions: 11"
run_test_args "" "5, 4, 3, 2, 1, 0, -1, -2, -3, -4, 5" "Enter sequence of integers, each followed by a space: Number of inversions: 45"
run_test_args "" "1, 5, -4, 57, -4, -57, -10000" "Enter sequence of integers, each followed by a space: Number of inversions: 16"
run_test_args "" "10003, 10200, 1000, 1120, 13, 49" "Enter sequence of integers, each followed by a space: Number of inversions: 12"
run_test_args "" "$(echo {10000..1})" "Enter sequence of integers, each followed by a space: Number of inversions: 49995000"
run_test_args "" "$(echo {1..10000})" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "" "$(echo {-1..-10000})" "Enter sequence of integers, each followed by a space: Number of inversions: 49995000"
run_test_args "" "$(echo {-10000..-1})" "Enter sequence of integers, each followed by a space: Number of inversions: 0"
run_test_args "" "1001, 1456, 3440, 5690, 11" "Enter sequence of integers, each followed by a space: Number of inversions: 4"
run_test_args "" "$(echo {100000..1})" "Enter sequence of integers, each followed by a space: Number of inversions: 4999950000"



echo -e "\nTotal tests run: $total"
echo -e "Number correct : $num_right"
echo -n "Percent correct: "
echo "scale=2; 100 * $num_right / $total" | bc

if [ "$language" = "java" ]; then
    echo -e -n "\nRemoving class files..."
    rm -f *.class
    echo "done"
elif [ "$language" = "c" ]; then
    echo -e -n "\nCleaning project..."
    make clean > /dev/null 2>&1
    echo "done"
fi
